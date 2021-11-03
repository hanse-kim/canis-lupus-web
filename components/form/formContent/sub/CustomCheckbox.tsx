import {ChakraProps, Checkbox, CheckboxProps, Text} from '@chakra-ui/react';

interface CustomCheckboxProps {
  children?: React.ReactNode;
  checkboxProps?: CheckboxProps;
  textStyle?: ChakraProps;
}

const CustomCheckbox = (props: CustomCheckboxProps) => {
  return (
    <Checkbox size='lg' {...props.checkboxProps}>
      <Text fontSize='14px' {...props.textStyle}>
        {props.children}
      </Text>
    </Checkbox>
  );
};

export const CheckboxAll = (props: CustomCheckboxProps) => {
  return (
    <CustomCheckbox {...props} textStyle={{fontWeight: 'bold'}}>
      {props.children}
    </CustomCheckbox>
  );
};

export const CheckboxChild = (props: CustomCheckboxProps) => {
  return (
    <CustomCheckbox {...props} textStyle={{color: '#636c73'}}>
      {props.children}
    </CustomCheckbox>
  );
};
