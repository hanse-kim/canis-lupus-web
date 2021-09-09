import useFormData from 'hooks/form/useFormData';
import {useCallback, useState} from 'react';
import {TosInfo} from 'types';

const useTermsOfUseHooks = (termsOfUseList: TosInfo[]) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);
  const {updateFormData} = useFormData();

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const resetCheckItems = useCallback(() => {
    setCheckedItems(new Array(termsOfUseList.length).fill(false));
  }, [termsOfUseList.length]);

  const checkAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems(checkedItems.map((item) => e.target.checked));
  };

  const checkEach = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setCheckedItems(
      checkedItems.map((item, index) => (index === i ? e.target.checked : item))
    );
  };

  const isAllRequirementsChecked = () => {
    for (let i = 0; i < termsOfUseList.length; i++) {
      if (termsOfUseList[i].is_required && !checkedItems[i]) {
        return false;
      }
    }

    return true;
  };

  const onSubmitClick = (callback: () => void) => {
    if (isAllRequirementsChecked()) {
      updateFormData({tos: checkedItems});
      callback();
    } else {
      alert('필수 약관에 동의해주시기 바랍니다.');
    }
  };

  return {
    resetCheckItems,
    isIndeterminate,
    checkAll,
    checkEach,
    onSubmitClick,
    allChecked,
    checkedItems,
  };
};

export default useTermsOfUseHooks;
