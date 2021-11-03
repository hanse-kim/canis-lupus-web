import {Image, Box, Center, InputProps} from '@chakra-ui/react';
import {Input} from '@chakra-ui/react';
import React, {useRef} from 'react';

const ProfileImageUploadButton = (props: {
  inputProps: InputProps;
  children?: React.ReactNode;
}) => {
  const {inputProps} = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  return (
    <Center
      onClick={onClick}
      backgroundColor='#c2c6cd'
      height='32px'
      width='32px'
      position='absolute'
      bottom='0'
      right='0'
      borderRadius='9999'
      padding='0'
      _hover={{cursor: 'pointer'}}
    >
      <Image position='absolute' src='icons/icon_camera.svg' alt='uploadIcon' />
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
        <ProfileImageUploadButton inputProps={inputProps} />
      </Box>
    </Center>
  );
};

export default ProfileImageUploadForm;
