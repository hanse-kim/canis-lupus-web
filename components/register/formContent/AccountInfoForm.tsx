import {FormControl, Stack} from '@chakra-ui/react';
import useAccountInfoValidation from 'hooks/register/useAccountInfoValidation';
import useFormData from 'hooks/register/useFormData';
import produce from 'immer';
import React, {useState} from 'react';
import {FormContentProps} from 'types';
import {
  RegisterFormErrorMessage,
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';
import SubmitButton from './sub/SubmitButton';

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
      <RegisterFormLabel isInvalid={props.isInvalid}>
        {props.label}
      </RegisterFormLabel>
      <RegisterFormInput
        type={props.type}
        placeholder={props.placeholder}
        onBlur={props.onFocusOut}
        ref={props.ref}
      />
      <RegisterFormHelperText isInvalid={props.isInvalid}>
        {props.helperMessage}
      </RegisterFormHelperText>
      <RegisterFormErrorMessage>{props.errorMessage}</RegisterFormErrorMessage>
    </FormControl>
  );
};

const AccountInfoForm = (props: FormContentProps) => {
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
  const {onSubmit} = props;
  const {updateFormData} = useFormData();

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
          updateFormData(data);
          onSubmit();
        }}
        disabled={!Object.entries(passed).every(([k, v]) => v)}
      >
        다음
      </SubmitButton>
    </Stack>
  );
};

export default AccountInfoForm;
