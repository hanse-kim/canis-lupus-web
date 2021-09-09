import {FormContentProps} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import CheckboxForm from 'components/form/formContent/CheckboxForm';
import useSelectInterestsHooks from 'hooks/register/useSelectInterestsHooks';
import useCategoryList from 'hooks/register/useCategoryList';
import LoadingSpinner from 'components/common/LoadingSpinner';

const SelectInterestsStep = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {checked, onCheckboxChange, onSubmitClick} = useSelectInterestsHooks();
  const {categoryList, isLoading} = useCategoryList();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FormContentWrapper>
      <CheckboxForm
        itemList={
          isLoading ? [] : Object.values(categoryList).map((item) => item.name)
        }
        checked={checked}
        onCheckboxChange={onCheckboxChange}
      />
      <SubmitButton
        onClick={() => {
          onSubmitClick(onSubmit);
        }}
      >
        회원가입
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default SelectInterestsStep;
