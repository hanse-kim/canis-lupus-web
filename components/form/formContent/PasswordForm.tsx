import {FormControl} from '@chakra-ui/react';
import React from 'react';
import {FormProps} from 'types';
import {
  RegisterFormErrorMessage,
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const PasswordForm = (props: FormProps) => {
  const {error, onFocusOut, onChange} = props;
  return (
    <FormControl isInvalid={error?.password.isInvalid}>
      <RegisterFormLabel isInvalid={error?.password.isInvalid}>
        비밀번호
      </RegisterFormLabel>
      <RegisterFormInput
        type='password'
        placeholder='비밀번호를 입력해주세요'
        onBlur={onFocusOut}
        onChange={onChange}
      />
      <RegisterFormHelperText isInvalid={error?.password.isInvalid}>
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </RegisterFormHelperText>
      <RegisterFormErrorMessage>
        {error?.password.message}
      </RegisterFormErrorMessage>
    </FormControl>
  );
};

export default PasswordForm;
