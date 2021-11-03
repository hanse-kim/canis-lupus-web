import {FormControl} from '@chakra-ui/form-control';
import {PlusSquareIcon} from '@chakra-ui/icons';
import {InputProps} from '@chakra-ui/input';
import {Text} from '@chakra-ui/layout';
import ImageUploadButton from 'components/common/ImageUploadButton';
import {FormProps, InputFormProps} from 'types/props';
import {FormLabel} from './sub/RegisterFormItems';

const ImageUploadForm = (props: InputFormProps) => {
  const formProps: FormProps = props;
  const inputProps: InputProps = props;

  return (
    <FormControl>
      <FormLabel>{formProps.label}</FormLabel>
      <ImageUploadButton
        inputProps={inputProps}
      >
        <PlusSquareIcon />
        <Text>{inputProps.placeholder}</Text>
      </ImageUploadButton>
    </FormControl>
  );
};

export default ImageUploadForm;
