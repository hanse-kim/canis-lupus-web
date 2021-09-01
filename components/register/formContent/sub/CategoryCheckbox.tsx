import {Tag, TagProps} from '@chakra-ui/react';

const checkedStyle: TagProps = {
  colorScheme: 'blue',
};

const notCheckedStyle: TagProps = {
  variant: 'outline',
  colorScheme: 'gray',
};

const CategoryCheckbox = (props: {
  children?: React.ReactNode;
  isChecked: boolean;
  onChange: (isChecked: boolean) => void;
}) => {
  return (
    <Tag
      onClick={() => {
        props.onChange(!props.isChecked);
      }}
      borderRadius='full'
      userSelect='none'
      margin='1'
      {...(props.isChecked ? checkedStyle : notCheckedStyle)}
    >
      {props.children}
    </Tag>
  );
};

export default CategoryCheckbox;
