import {Image, Box, Center, InputProps} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import React from 'react';

const ProfileImageUploadForm = (props: InputProps & {imageUrl?: string}) => {
  const {imageUrl, ...inputProps} = props;

  return (
    <Center>
      <Box className='frame' width='120px' height='120px' position='relative'>
        <Image
          width='full'
          height='full'
          src={imageUrl}
          alt='profileImage'
          borderRadius='full'
          fallbackSrc='profileFallback.png'
          objectFit='cover'
        />
        <ImageUploadButton inputProps={inputProps} />
      </Box>
    </Center>
  );
};

export default ProfileImageUploadForm;
