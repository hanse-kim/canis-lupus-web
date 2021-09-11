import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  FormErrorMessage,
  FormHelperText,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const NicknameForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.nickname.isInvalid}>
      <FormLabel isInvalid={error?.nickname.isInvalid}>
        닉네임
      </FormLabel>
      <FormInput
        placeholder='닉네임을 입력해주세요'
        onChange={onChange}
        maxLength={20}
      />
      <FormHelperText isInvalid={error?.nickname.isInvalid}>
        20자 이내로 입력할 수 있어요.
      </FormHelperText>
      <FormErrorMessage>
        {error?.nickname.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default NicknameForm;
