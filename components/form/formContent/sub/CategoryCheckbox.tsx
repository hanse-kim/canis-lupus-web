import {Tag} from '@chakra-ui/react';
import {colors} from 'style';

const checkedStyle = {
  backgroundColor: colors.mainBlue[1],
  borderColor: colors.mainBlue[1],
  color: colors.white,
};

const notCheckedStyle = {
  backgroundColor: colors.white,
  borderColor: colors.mainGray[0],
  color: colors.mainGray[0],
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
      borderWidth='1px'
      borderRadius='full'
      paddingX='12px'
      paddingY='8px'
      userSelect='none'
      margin='1'
      {...(props.isChecked ? checkedStyle : notCheckedStyle)}
    >
      {props.children}
    </Tag>
  );
};

export default CategoryCheckbox;
