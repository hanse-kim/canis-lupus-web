import {FormControl} from '@chakra-ui/form-control';
import {PlusSquareIcon} from '@chakra-ui/icons';
import {Text} from '@chakra-ui/layout';
import ImageUploadButton from 'components/common/ImageUploadButton';
import {InputFormProps} from 'types/props';
import {FormLabel} from './sub/RegisterFormItems';

const ImageUploadForm = (props: InputFormProps) => {
  const {label, placeholder, onChange} = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <ImageUploadButton
        buttonProps={{
          variant: 'outline',
          width: 'full',
          height: '160px',
          flexDirection: 'column',
        }}
        onChange={onChange}
      >
        <PlusSquareIcon />
        <Text>{placeholder}</Text>
      </ImageUploadButton>
    </FormControl>
  );
};

export default ImageUploadForm;
