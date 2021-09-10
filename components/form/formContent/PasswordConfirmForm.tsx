import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types';
import {
  RegisterFormErrorMessage,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const PasswordConfirmForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.passwordConfirm.isInvalid}>
      <RegisterFormLabel isInvalid={error?.passwordConfirm.isInvalid}>
        비밀번호 확인
      </RegisterFormLabel>
      <RegisterFormInput
        type='password'
        placeholder='비밀번호를 한번 더 입력해주세요'
        onChange={onChange}
      />
      <RegisterFormErrorMessage>
        {error?.passwordConfirm.message}
      </RegisterFormErrorMessage>
    </FormControl>
  );
};

export default PasswordConfirmForm;
