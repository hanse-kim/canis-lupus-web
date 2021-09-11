import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  FormErrorMessage,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const EmailForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.email.isInvalid}>
      <FormLabel isInvalid={error?.email.isInvalid}>
        이메일
      </FormLabel>
      <FormInput
        type='email'
        placeholder='이메일을 입력해주세요'
        onChange={onChange}
      />
      <FormErrorMessage>
        {error?.email.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default EmailForm;
