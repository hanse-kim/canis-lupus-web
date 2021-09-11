import {FormControl} from '@chakra-ui/react';
import {CheckboxFormProps} from 'types/props';
import CategoryCheckbox from './sub/CategoryCheckbox';
import {FormLabel} from './sub/RegisterFormItems';

const CheckboxForm = (props: CheckboxFormProps) => {
  const {itemList, checked, onCheckboxChange, label} = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
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
