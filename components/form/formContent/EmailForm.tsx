import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  RegisterFormErrorMessage,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const EmailForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.email.isInvalid}>
      <RegisterFormLabel isInvalid={error?.email.isInvalid}>
        이메일
      </RegisterFormLabel>
      <RegisterFormInput
        type='email'
        placeholder='이메일을 입력해주세요'
        onChange={onChange}
      />
      <RegisterFormErrorMessage>
        {error?.email.message}
      </RegisterFormErrorMessage>
    </FormControl>
  );
};

export default EmailForm;
