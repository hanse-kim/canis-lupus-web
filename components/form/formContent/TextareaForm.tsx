import {FormControl} from '@chakra-ui/form-control';
import {TextareaFormProps} from 'types/props';
import {
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  FormTextArea,
} from './sub/RegisterFormItems';

const TextareaForm = (props: TextareaFormProps) => {
  const {
    error,
    label,
    helperText,
    helperTextColor,
    ...textareaProps
  } = props;
  return (
    <FormControl isInvalid={error?.isInvalid}>
      <FormLabel isInvalid={error?.isInvalid}>{label}</FormLabel>
      <FormTextArea {...textareaProps} />
      <FormHelperText isInvalid={error?.isInvalid} color={helperTextColor}>
        {helperText}
      </FormHelperText>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default TextareaForm;
