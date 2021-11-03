import {Center, Input, InputProps, Image} from '@chakra-ui/react';
import React, {useRef} from 'react';

const ImageUploadButton = (props: {
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

export default ImageUploadButton;
