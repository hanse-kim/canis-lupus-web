import {FormControl} from '@chakra-ui/react';
import {InputFormProps} from 'types/props';
import {
  FormErrorMessage,
  FormHelperText,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const InputForm = (props: InputFormProps) => {
  const {error, label, helperText, helperTextColor, ...inputProps} = props;
  return (
    <FormControl isInvalid={error?.isInvalid}>
      <FormLabel isInvalid={error?.isInvalid}>{label}</FormLabel>
      <FormInput {...inputProps} />
      <FormHelperText isInvalid={error?.isInvalid} color={helperTextColor}>
        {helperText}
      </FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputForm;
