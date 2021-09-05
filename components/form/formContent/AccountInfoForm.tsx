import {FormControl} from '@chakra-ui/react';
import useAccountInfoHooks from 'hooks/register/useAccountInfoHooks';
import useFormData from 'hooks/register/useFormData';
import React, {useEffect} from 'react';
import {FormContentProps} from 'types';
import FormContentWrapper from '../FormContentWrapper';
import {
  RegisterFormErrorMessage,
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';
import SubmitButton from './sub/SubmitButton';

const AccountInfoForm = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {updateFormData, formDataContainsKey, formData} = useFormData();
  const {
    data,
    error,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    isSubmittable,
    keys,
  } = useAccountInfoHooks();

  useEffect(() => {
    if (formDataContainsKey(keys)) {
      onSubmit();
    }
  }, [formData, formDataContainsKey, keys, onSubmit]);

  return (
    <FormContentWrapper>
      <FormControl isInvalid={error.email.isInvalid}>
        <RegisterFormLabel isInvalid={error.email.isInvalid}>
          이메일
        </RegisterFormLabel>
        <RegisterFormInput
          type='email'
          placeholder='이메일을 입력해주세요'
          onBlur={onEmailChange}
        />
        <RegisterFormErrorMessage>
          {error.email.message}
        </RegisterFormErrorMessage>
      </FormControl>

      <FormControl isInvalid={error.password.isInvalid}>
        <RegisterFormLabel isInvalid={error.password.isInvalid}>
          비밀번호
        </RegisterFormLabel>
        <RegisterFormInput
          type='password'
          placeholder='비밀번호를 입력해주세요'
          onBlur={onPasswordChange}
        />
        <RegisterFormHelperText isInvalid={error.password.isInvalid}>
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </RegisterFormHelperText>
        <RegisterFormErrorMessage>
          {error.password.message}
        </RegisterFormErrorMessage>
      </FormControl>

      <FormControl isInvalid={error.passwordConfirm.isInvalid}>
        <RegisterFormLabel isInvalid={error.passwordConfirm.isInvalid}>
          비밀번호 확인
        </RegisterFormLabel>
        <RegisterFormInput
          type='password'
          placeholder='비밀번호를 한번 더 입력해주세요'
          onBlur={onPasswordConfirmChange}
        />
        <RegisterFormErrorMessage>
          {error.passwordConfirm.message}
        </RegisterFormErrorMessage>
      </FormControl>

      <SubmitButton
        onClick={() => {
          updateFormData(data);
        }}
        disabled={isSubmittable()}
      >
        다음
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default AccountInfoForm;
