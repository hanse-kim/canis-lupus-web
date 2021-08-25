import {ChakraProps, Checkbox, CheckboxProps, Text} from '@chakra-ui/react';

interface CustomCheckboxProps {
  children?: React.ReactNode;
  checkboxProps?: CheckboxProps;
  textStyle?: ChakraProps;
}

const CustomCheckbox = (props: CustomCheckboxProps) => {
  return (
    <Checkbox {...props.checkboxProps} size='lg'>
      <Text {...props.textStyle}>{props.children}</Text>
    </Checkbox>
  );
};

export const CheckboxAll = (props: CustomCheckboxProps) => {
  return (
    <CustomCheckbox
      {...props}
      textStyle={{fontSize: 'lg', fontWeight: 'semibold'}}
    >
      {props.children}
    </CustomCheckbox>
  );
};

export const CheckboxChild = (props: CustomCheckboxProps) => {
  return (
    <CustomCheckbox
      {...props}
      textStyle={{fontSize: 'sm', fontWeight: '400', color: 'gray.400'}}
    >
      {props.children}
    </CustomCheckbox>
  );
};
