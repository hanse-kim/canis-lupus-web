import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types';
import {
  RegisterFormErrorMessage,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const EmailForm = (props: FormProps) => {
  const {error, onFocusOut} = props;
  console.log(error);

  return (
    <FormControl isInvalid={error.email.isInvalid}>
      <RegisterFormLabel isInvalid={error.email.isInvalid}>
        이메일
      </RegisterFormLabel>
      <RegisterFormInput
        type='email'
        placeholder='이메일을 입력해주세요'
        onBlur={onFocusOut}
      />
      <RegisterFormErrorMessage>{error.email.message}</RegisterFormErrorMessage>
    </FormControl>
  );
};

export default EmailForm;
