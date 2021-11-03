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
import {colors} from 'style';

export const FormLabel = (props: {
  isInvalid?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <ChakraFormLabel
      as='legend'
      fontWeight='bold'
      color={props.isInvalid ? colors.warningRed : undefined}
      marginBottom='8px'
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
      fontSize='12px'
      marginTop='4px'
      display={props.isInvalid ? 'none' : undefined}
      color={props.color ? props.color : '#636c73'}
    >
      {props.children}
    </ChakraFormHelperText>
  );
};

export const FormErrorMessage = (props: {children?: React.ReactNode}) => {
  return (
    <ChakraFormErrorMessage fontSize='12px' marginTop='4px'>
      {props.children}
    </ChakraFormErrorMessage>
  );
};

export const FormInput = (props: {ref?: any} & InputProps) => {
  return (
    <ChakraInput
      borderRadius='2px'
      height='46px'
      _placeholder={{color: colors.mainGray[0]}}
      {...props}
    />
  );
};

export const FormTextArea = (props: TextareaProps) => {
  return <ChakraTextarea {...props} />;
};
