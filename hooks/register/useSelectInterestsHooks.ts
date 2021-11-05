import useFormData from 'hooks/form/useFormData';
import {useState} from 'react';

const useSelectInterestsHooks = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const {updateFormData} = useFormData();

  const onCheckboxChange = (checkboxItem: string, isChecked: boolean) => {
    if (isChecked) {
      setChecked([...checked, checkboxItem]);
    } else {
      setChecked(checked.filter((v) => v !== checkboxItem));
    }
  };

  const onSubmitClick = () => {
    updateFormData({categories: checked});
  };

  return {checked, setChecked, onCheckboxChange, onSubmitClick};
};

export default useSelectInterestsHooks;
