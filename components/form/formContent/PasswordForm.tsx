import {FormControl} from '@chakra-ui/react';
import React from 'react';
import {FormProps} from 'types/props';
import {
  FormErrorMessage,
  FormHelperText,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const PasswordForm = (props: FormProps) => {
  const {error, onFocusOut, onChange} = props;
  return (
    <FormControl isInvalid={error?.password.isInvalid}>
      <FormLabel isInvalid={error?.password.isInvalid}>
        비밀번호
      </FormLabel>
      <FormInput
        type='password'
        placeholder='비밀번호를 입력해주세요'
        onBlur={onFocusOut}
        onChange={onChange}
      />
      <FormHelperText isInvalid={error?.password.isInvalid}>
        영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
      </FormHelperText>
      <FormErrorMessage>
        {error?.password.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default PasswordForm;
