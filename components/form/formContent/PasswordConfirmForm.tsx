import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  FormErrorMessage,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const PasswordConfirmForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.passwordConfirm.isInvalid}>
      <FormLabel isInvalid={error?.passwordConfirm.isInvalid}>
        비밀번호 확인
      </FormLabel>
      <FormInput
        type='password'
        placeholder='비밀번호를 한번 더 입력해주세요'
        onChange={onChange}
      />
      <FormErrorMessage>
        {error?.passwordConfirm.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default PasswordConfirmForm;
