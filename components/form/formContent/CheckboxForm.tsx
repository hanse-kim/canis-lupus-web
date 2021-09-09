import {FormControl} from '@chakra-ui/react';
import CategoryCheckbox from './sub/CategoryCheckbox';
import {RegisterFormLabel} from './sub/RegisterFormItems';

const CheckboxForm = (props: {
  itemList: string[];
  checked: string[];
  onCheckboxChange: (checkboxItem: string, isChecked: boolean) => void;
}) => {
  const {itemList, checked, onCheckboxChange} = props;
  return (
    <FormControl>
      <RegisterFormLabel>관심 카테고리 선택</RegisterFormLabel>
      {itemList.map((item, index) => {
        return (
          <CategoryCheckbox
            key={index}
            isChecked={checked.includes(item)}
            onChange={(isChecked) => {
              onCheckboxChange(item, isChecked);
            }}
          >
            {item}
          </CategoryCheckbox>
        );
      })}
    </FormControl>
  );
};

export default CheckboxForm;
