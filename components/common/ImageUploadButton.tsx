import {Button, ButtonProps, Input, InputProps} from '@chakra-ui/react';
import React, {useRef} from 'react';

const ImageUploadButton = (props: {
  buttonProps: ButtonProps;
  inputProps: InputProps;
  children?: React.ReactNode;
}) => {
  const {children, buttonProps, inputProps} = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  return (
    <Button {...buttonProps} onClick={onClick}>
      {children}
      <Input
        type='file'
        display='none'
        ref={inputRef}
        accept='image/jpg, image/jpeg, image/png'
        {...inputProps}
      />
    </Button>
  );
};

export default ImageUploadButton;
