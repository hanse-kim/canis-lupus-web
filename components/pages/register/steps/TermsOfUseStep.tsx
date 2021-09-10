import {
  Divider,
  Stack,
  Text,
} from '@chakra-ui/react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useTermsOfUseList from 'hooks/register/useTermsOfUseList';
import React, {useEffect} from 'react';
import {FormContentProps} from 'types/props';
import FormContentWrapper from 'components/form/FormContentWrapper';
import {
  CheckboxAll,
} from 'components/form/formContent/sub/CustomCheckbox';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useTermsOfUseHooks from 'hooks/register/useTermsOfUseHooks';
import RegisterStepWrapper from '../RegisterStepWrapper';
import TermsOfUseForm from 'components/form/formContent/TermsOfUseForm';

const formDataKeys = ['tos'];

const TermsOfUseStep = (props: FormContentProps) => {
  const {isLoading, termsOfUseList} = useTermsOfUseList();
  const {
    resetCheckItems,
    checkAll,
    allChecked,
    isIndeterminate,
    checkEach,
    checkedItems,
    onSubmitClick,
  } = useTermsOfUseHooks(termsOfUseList);

  useEffect(() => {
    resetCheckItems();
  }, [resetCheckItems]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <RegisterStepWrapper {...props} formDataKeys={formDataKeys}>
      <FormContentWrapper>
        <Text marginBottom='5'>
          아래 약관에 동의하시고 이거모임에서 목표를 이루어보세요
        </Text>
        <Stack spacing={3}>
          <Divider />
          <CheckboxAll
            checkboxProps={{
              onChange: checkAll,
              isChecked: allChecked,
              isIndeterminate: isIndeterminate,
            }}
          >
            모두 동의합니다
          </CheckboxAll>
          <Divider />
          {termsOfUseList.map((tos, index) => (
            <TermsOfUseForm
              key={index}
              tos={tos}
              onChange={(e) => {
                checkEach(e, index);
              }}
              isChecked={checkedItems[index]}
            />
          ))}
        </Stack>
        <SubmitButton onClick={onSubmitClick}>다음</SubmitButton>
      </FormContentWrapper>
    </RegisterStepWrapper>
  );
};

export default TermsOfUseStep;
