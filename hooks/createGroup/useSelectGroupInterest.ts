import useFormData from 'hooks/form/useFormData';
import {useState} from 'react';

const useSelectGroupInterest = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const {updateFormData} = useFormData();

  const onCheckboxChange = (checkboxItem: string, isChecked: boolean) => {
    if (isChecked) {
      setChecked([checkboxItem]);
    }
  };

  const onSubmitClick = () => {
    const isSubmittable = checked.length > 0;
    if (!isSubmittable) {
      alert('모임의 관심사를 선택해주세요.');
      return;
    }

    updateFormData({groupInterest: checked[0]});
  };

  return {checked, onCheckboxChange, onSubmitClick};
};

export default useSelectGroupInterest;
