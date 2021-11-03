import {Stack} from '@chakra-ui/react';
import React, {useEffect} from 'react';
import {FormContentProps} from 'types/props';
import {CheckboxAll} from 'components/form/formContent/sub/CustomCheckbox';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useTermsOfUseHooks from 'hooks/register/useTermsOfUseHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';
import TermsOfUseForm from 'components/form/formContent/TermsOfUseForm';

const formDataKeys = ['tos'];
const termsOfUseList = [
  {name: '이용약관', isRequired: true, url: '/terms/termsOfUse'},
  {
    name: '개인정보 수집 및 이용에 대한 안내',
    isRequired: true,
    url: '/terms/privacyPolicy',
  },
  {
    name: '위치기반 서비스 이용 약관 동의',
    isRequired: true,
    url: '/terms/locationService',
  },
];

const TermsOfUseStep = (props: FormContentProps) => {
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

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <Stack spacing='24px'>
        <CheckboxAll
          checkboxProps={{
            onChange: checkAll,
            isChecked: allChecked,
            isIndeterminate: isIndeterminate,
          }}
        >
          모두 동의합니다.
        </CheckboxAll>
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
      <SubmitButton onClick={onSubmitClick} disabled={!allChecked}>
        다음
      </SubmitButton>
    </FormStepWrapper>
  );
};

export default TermsOfUseStep;
