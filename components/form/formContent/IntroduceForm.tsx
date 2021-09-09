import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types';
import {
  RegisterFormErrorMessage,
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const IntroduceForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error.introduce.isInvalid}>
      <RegisterFormLabel isInvalid={error.introduce.isInvalid}>
        자기소개
      </RegisterFormLabel>
      <RegisterFormInput
        placeholder='자기소개를 입력해주세요'
        onChange={onChange}
      />
      <RegisterFormHelperText isInvalid={error.introduce.isInvalid}>
        나이와 직업, 도시 따위를 자유롭게 소개하세요.
      </RegisterFormHelperText>
      <RegisterFormErrorMessage>
        {error.introduce.message}
      </RegisterFormErrorMessage>
    </FormControl>
  );
};

export default IntroduceForm;
