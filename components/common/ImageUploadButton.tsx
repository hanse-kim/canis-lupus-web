import {Button, ButtonProps, Input} from '@chakra-ui/react';
import React, {ChangeEventHandler, useRef} from 'react';

const ImageUploadButton = (props: {
  buttonProps: ButtonProps;
  children?: React.ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputRef.current?.click();
  };

  return (
    <Button {...props.buttonProps} onClick={onClick}>
      {props.children}
      <Input
        type='file'
        display='none'
        ref={inputRef}
        onChange={props.onChange}
      />
    </Button>
  );
};

export default ImageUploadButton;
