import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import useAccountInfoValidation from 'hooks/register/useAccountInfoValidation';
import produce from 'immer';
import React, {useState} from 'react';
import SubmitButton from './parts/SubmitButton';

const CustomFormInput = (props: {
  isInvalid: boolean;
  helperMessage?: string;
  errorMessage: string | null;
  onFocusOut: (e: React.FocusEvent<HTMLInputElement>) => void;
  type: string;
  label: string;
  placeholder: string;
  ref?: any;
}) => {
  return (
    <FormControl isInvalid={props.isInvalid}>
      <FormLabel
        as='legend'
        fontWeight='bold'
        color={props.isInvalid ? 'red.500' : undefined}
      >
        {props.label}
      </FormLabel>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onFocusOut}
        borderRadius='0'
        ref={props.ref}
      />
      <FormHelperText
        fontSize='xs'
        color='gray.600'
        display={props.isInvalid ? 'none' : undefined}
      >
        {props.helperMessage}
      </FormHelperText>
      <FormErrorMessage fontSize='xs'>{props.errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

const AccountInfoForm = (props: any) => {
  const {error, validateEmail, validatePassword, validatePasswordConfirm} =
    useAccountInfoValidation();
  const [data, setData] = useState<{[key: string]: string}>({
    email: '',
    password: '',
  });
  const [passed, setPassed] = useState<{[key: string]: boolean}>({
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const [password, setPassword] = useState('');
  const {update, onSubmit} = props;

  return (
    <Stack spacing={6}>
      <CustomFormInput
        label='이메일'
        placeholder='이메일을 입력해주세요'
        type='email'
        isInvalid={error.email.isInvalid}
        errorMessage={error.email.message}
        onFocusOut={(e) => {
          const email = e.target.value;
          setPassed(
            produce(passed, (draft) => {
              draft.email = validateEmail(email);
            })
          );
          setData(
            produce(data, (draft) => {
              draft.email = email;
            })
          );
        }}
      />
      <CustomFormInput
        label='비밀번호'
        placeholder='비밀번호를 입력해주세요'
        type='password'
        isInvalid={error.password.isInvalid}
        helperMessage='영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.'
        errorMessage={error.password.message}
        onFocusOut={(e) => {
          const pw = e.target.value;
          setPassword(pw);
          setPassed(
            produce(passed, (draft) => {
              draft.password = validatePassword(pw);
            })
          );
        }}
      />
      <CustomFormInput
        label='비밀번 호 확인'
        placeholder='비밀번호를 한번 더 입력해주세요'
        type='password'
        isInvalid={error.passwordConfirm.isInvalid}
        errorMessage={error.passwordConfirm.message}
        onFocusOut={(e) => {
          const pwc = e.target.value;
          setPassed(
            produce(passed, (draft) => {
              draft.passwordConfirm = validatePasswordConfirm(password, pwc);
            })
          );
          setData(
            produce(data, (draft) => {
              draft.password = pwc;
            })
          );
        }}
      />
      <SubmitButton
        onClick={() => {
          update(data);
          onSubmit();
        }}
        disabled={!(Object.entries(passed).every(([k, v]) => v))}
      >
        다음
      </SubmitButton>
    </Stack>
  );
};

export default AccountInfoForm;
