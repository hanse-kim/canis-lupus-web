import {
  ColorProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import React from 'react';

export const RegisterFormLabel = (props: {
  isInvalid?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <FormLabel
      as='legend'
      fontWeight='bold'
      color={props.isInvalid ? 'red.500' : undefined}
    >
      {props.children}
    </FormLabel>
  );
};

export const RegisterFormHelperText = (props: {
  color?: ColorProps['color'];
  isInvalid?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <FormHelperText
      fontSize='xs'
      display={props.isInvalid ? 'none' : undefined}
      color={props.color ? props.color : 'gray.400'}
    >
      {props.children}
    </FormHelperText>
  );
};

export const RegisterFormErrorMessage = (props: {
  children?: React.ReactNode;
}) => {
  return <FormErrorMessage fontSize='xs'>{props.children}</FormErrorMessage>;
};

export const RegisterFormInput = (props: {ref?: any} & InputProps) => {
  return <Input borderRadius={0} {...props} />;
};
