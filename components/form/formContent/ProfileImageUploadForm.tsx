import {Image, Box, Flex, Center} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import LoadingSpinner from 'components/common/LoadingSpinner';
import React, {useState} from 'react';
import {ImageUploadFormProps} from 'types/props';

const ProfileImageUploadButton = (
  props: {
    children?: React.ReactNode;
  } & ImageUploadFormProps
) => {
  return (
    <ImageUploadButton
      onImageChange={props.onImageChange}
      onImageUploading={props.onImageUploading}
      imageType='users'
      display='flex'
      justifyContent='center'
      alignItems='center'
      backgroundColor='#c2c6cd'
      height='32px'
      width='32px'
      position='absolute'
      bottom='0'
      right='0'
      borderRadius='9999'
      padding='0'
    >
      <Image
        position='absolute'
        src='/icons/icon_camera.svg'
        alt='uploadIcon'
      />
    </ImageUploadButton>
  );
};

const ProfileImageUploadForm = (
  props: {imageUrl?: string} & ImageUploadFormProps
) => {
  const {imageUrl, onImageChange} = props;
  const [isUploading, setUploading] = useState(false);

  return (
    <Flex className='profileImageUploadForm' justifyContent='center'>
      <Box width='120px' height='120px' position='relative'>
        <Center
          className='frame'
          width='full'
          height='full'
          backgroundColor='#ebebeb'
          borderRadius='full'
          overflow='hidden'
          position='relative'
        >
          {isUploading && <LoadingSpinner />}
          {!isUploading && (
            <Image
              width='full'
              height='full'
              src={imageUrl}
              alt='profileImage'
              fallbackSrc='/profileFallback.png'
              objectFit='cover'
            />
          )}
        </Center>
        <ProfileImageUploadButton
          onImageChange={onImageChange}
          onImageUploading={setUploading}
        />
      </Box>
    </Flex>
  );
};

export default ProfileImageUploadForm;
