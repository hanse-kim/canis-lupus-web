import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  FormErrorMessage,
  FormHelperText,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const IntroduceForm = (props: FormProps) => {
  const {error, onChange} = props;
  return (
    <FormControl isInvalid={error?.introduce.isInvalid}>
      <FormLabel isInvalid={error?.introduce.isInvalid}>
        자기소개
      </FormLabel>
      <FormInput
        placeholder='자기소개를 입력해주세요'
        onChange={onChange}
      />
      <FormHelperText isInvalid={error?.introduce.isInvalid}>
        나이와 직업, 도시 따위를 자유롭게 소개하세요.
      </FormHelperText>
      <FormErrorMessage>
        {error?.introduce.message}
      </FormErrorMessage>
    </FormControl>
  );
};

export default IntroduceForm;
