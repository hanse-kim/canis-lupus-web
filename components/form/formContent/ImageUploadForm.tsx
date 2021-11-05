import {FormControl} from '@chakra-ui/form-control';
import {Image} from '@chakra-ui/image';
import {InputProps} from '@chakra-ui/input';
import {Box, Center, Text} from '@chakra-ui/layout';
import ImageUploadButton from 'components/common/ImageUploadButton';
import LoadingSpinner from 'components/common/LoadingSpinner';
import React, {useState} from 'react';
import {colors} from 'style';
import {ImageUploadFormProps} from 'types/props';
import {FormLabel} from './sub/RegisterFormItems';

const GroupImageUploadButton = (
  props: {
    children?: React.ReactNode;
  } & ImageUploadFormProps
) => {
  const {onImageChange, onImageUploading, children} = props;

  return (
    <ImageUploadButton
      className='imageUploadButton'
      onImageChange={onImageChange}
      onImageUploading={onImageUploading}
      imageType='meetings'
      width='full'
      height='full'
      position='relative'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      {children}
    </ImageUploadButton>
  );
};

const ImageUploadForm = (
  props: InputProps & ImageUploadFormProps & {label?: string; imageUrl?: string}
) => {
  const {label, imageUrl, onImageChange, ...inputProps} = props;
  const [isUploading, setUploading] = useState(false);

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
        <GroupImageUploadButton
          onImageChange={onImageChange}
          onImageUploading={setUploading}
        >
          {isUploading && <LoadingSpinner />}
          {!isUploading && (
            <React.Fragment>
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
            </React.Fragment>
          )}
        </GroupImageUploadButton>
      </Box>
    </FormControl>
  );
};

export default ImageUploadForm;
