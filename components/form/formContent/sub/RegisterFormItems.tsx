import {
  ColorProps,
  FormErrorMessage as ChakraFormErrorMessage,
  FormHelperText as ChakraFormHelperText,
  FormLabel as ChakraFormLabel,
  Input as ChakraInput,
  Textarea as ChakraTextarea,
  InputProps,
  TextareaProps,
} from '@chakra-ui/react';
import React from 'react';

export const FormLabel = (props: {
  isInvalid?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <ChakraFormLabel
      as='legend'
      fontWeight='bold'
      color={props.isInvalid ? 'red.500' : undefined}
    >
      {props.children}
    </ChakraFormLabel>
  );
};

export const FormHelperText = (props: {
  color?: ColorProps['color'];
  isInvalid?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <ChakraFormHelperText
      fontSize='xs'
      display={props.isInvalid ? 'none' : undefined}
      color={props.color ? props.color : 'gray.400'}
    >
      {props.children}
    </ChakraFormHelperText>
  );
};

export const FormErrorMessage = (props: {
  children?: React.ReactNode;
}) => {
  return (
    <ChakraFormErrorMessage fontSize='xs'>
      {props.children}
    </ChakraFormErrorMessage>
  );
};

export const FormInput = (props: {ref?: any} & InputProps) => {
  return <ChakraInput borderRadius={0} {...props} />;
};

export const FormTextArea = (props: TextareaProps) => {
  return <ChakraTextarea {...props} />;
};
