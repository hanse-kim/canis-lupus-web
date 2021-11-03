import {FormControl} from '@chakra-ui/form-control';
import {Image} from '@chakra-ui/image';
import {Input, InputProps} from '@chakra-ui/input';
import {Box, Center, Text} from '@chakra-ui/layout';
import {useRef} from 'react';
import {colors} from 'style';
import {FormLabel} from './sub/RegisterFormItems';

const ImageUploadButton = (props: {
  inputProps: InputProps;
  children?: React.ReactNode;
}) => {
  const {inputProps, children} = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  return (
    <Center
      className='imageUploadButton'
      onClick={onClick}
      _hover={{cursor: 'pointer'}}
      width='full'
      height='full'
      position='relative'
    >
      {children}
      <Input
        type='file'
        display='none'
        ref={inputRef}
        accept='image/jpg, image/jpeg, image/png'
        {...inputProps}
      />
    </Center>
  );
};

const ImageUploadForm = (
  props: InputProps & {label?: string; imageUrl?: string}
) => {
  const {label, imageUrl, ...inputProps} = props;

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Box
        className='imageUploadFormWrapper'
        height='180px'
        overflow='hidden'
        border={`1px solid ${colors.mainGray[0]}`}
        borderRadius='2px'
      >
        <ImageUploadButton inputProps={inputProps}>
          <Center
            className='buttonBackground'
            flexDirection='column'
            position='absolute'
          >
            <Image src='icons/icon_photo.svg' alt='uploadIcon' />
            <Text color={colors.mainGray[0]} fontSize='12px'>
              {inputProps.placeholder}
            </Text>
          </Center>
          <Box className='uploadImage' position='absolute'>
            {imageUrl && (
              <Image
                src={imageUrl}
                alt='groupImage'
                width='full'
                height='full'
                objectFit='cover'
              />
            )}
          </Box>
        </ImageUploadButton>
      </Box>
    </FormControl>
  );
};

export default ImageUploadForm;
