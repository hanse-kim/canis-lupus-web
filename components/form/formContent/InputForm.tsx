import {FormControl} from '@chakra-ui/react';
import {InputFormProps} from 'types/props';
import {
  FormErrorMessage,
  FormHelperText,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const InputForm = (props: InputFormProps) => {
  const {
    error,
    onChange,
    onFocusOut,
    label,
    placeholder,
    maxLength,
    type,
    helperText,
    helperTextColor,
  } = props;
  return (
    <FormControl isInvalid={error?.isInvalid}>
      <FormLabel isInvalid={error?.isInvalid}>{label}</FormLabel>
      <FormInput
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onFocusOut}
      />
      <FormHelperText isInvalid={error?.isInvalid} color={helperTextColor}>
        {helperText}
      </FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default InputForm;
