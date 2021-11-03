import {FormControl} from '@chakra-ui/react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import {CheckboxFormProps} from 'types/props';
import CategoryCheckbox from './sub/CategoryCheckbox';
import {FormLabel} from './sub/RegisterFormItems';

const CheckboxForm = (props: CheckboxFormProps) => {
  const {itemList, checked, onCheckboxChange, label, isLoading} = props;

  if (isLoading) {
    return (
      <FormControl>
        {label && <FormLabel>{label}</FormLabel>}
        <LoadingSpinner />
      </FormControl>
    );
  }

  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      {itemList.map((item, index) => {
        return (
          <CategoryCheckbox
            key={index}
            isChecked={checked.includes(item.value)}
            onChange={(isChecked) => {
              onCheckboxChange(item.value, isChecked);
            }}
          >
            {item.name}
          </CategoryCheckbox>
        );
      })}
    </FormControl>
  );
};

export default CheckboxForm;
