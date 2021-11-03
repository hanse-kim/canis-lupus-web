import LoadingSpinner from 'components/common/LoadingSpinner';
import CheckboxForm from 'components/form/formContent/CheckboxForm';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import FormStepWrapper from 'components/form/FormStepWrapper';
import useSelectGroupInterestHooks from 'hooks/createGroup/useSelectGroupInterestHooks';
import useCategoryList from 'hooks/api/useCategoryList';
import {FormContentProps} from 'types/props';

const formDataKeys = ['groupInterest'];

const SelectGroupInterestStep = (props: FormContentProps) => {
  const {categoryList, isLoading} = useCategoryList();
  const {checked, onCheckboxChange, onSubmitClick} =
    useSelectGroupInterestHooks();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <CheckboxForm
        itemList={
          isLoading ?
            [] :
            Object.values(categoryList).map((item) => {
                return {name: item.name, value: item._id};
              })
        }
        checked={checked}
        onCheckboxChange={onCheckboxChange}
      />
      <SubmitButton onClick={onSubmitClick}>다음</SubmitButton>
    </FormStepWrapper>
  );
};

export default SelectGroupInterestStep;
