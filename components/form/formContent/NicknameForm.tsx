import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  RegisterFormErrorMessage,
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const NicknameForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.nickname.isInvalid}>
      <RegisterFormLabel isInvalid={error?.nickname.isInvalid}>
        닉네임
      </RegisterFormLabel>
      <RegisterFormInput
        placeholder='닉네임을 입력해주세요'
        onChange={onChange}
        maxLength={20}
      />
      <RegisterFormHelperText isInvalid={error?.nickname.isInvalid}>
        20자 이내로 입력할 수 있어요.
      </RegisterFormHelperText>
      <RegisterFormErrorMessage>
        {error?.nickname.message}
      </RegisterFormErrorMessage>
    </FormControl>
  );
};

export default NicknameForm;
