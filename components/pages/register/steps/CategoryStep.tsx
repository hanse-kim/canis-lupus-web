import {FormControl} from '@chakra-ui/react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useCategoryList from 'hooks/register/useCategoryList';
import useFormData from 'hooks/form/useFormData';
import React, {useEffect, useState} from 'react';
import {FormContentProps} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import CategoryCheckbox from 'components/form/formContent/sub/CategoryCheckbox';
import {RegisterFormLabel} from 'components/form/formContent/sub/RegisterFormItems';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';

const keys = ['interests'];

const CategoryStep = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {categoryList, isLoading} = useCategoryList();
  const {updateFormData, formDataContainsKey, formData} = useFormData();
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    if (formDataContainsKey(keys)) {
      onSubmit();
    }
  }, [formData, formDataContainsKey, onSubmit]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FormContentWrapper>
      <FormControl>
        <RegisterFormLabel>관심 카테고리 선택</RegisterFormLabel>
        {categoryList.map((item, index) => {
          return (
            <CategoryCheckbox
              key={index}
              isChecked={checked.includes(item.name)}
              onChange={(isChecked) => {
                isChecked ?
                  setChecked([...checked, item.name]) :
                  setChecked(checked.filter((v) => v !== item.name));
              }}
            >
              {item.name}
            </CategoryCheckbox>
          );
        })}
      </FormControl>
      <SubmitButton
        onClick={() => {
          updateFormData({interests: checked});
        }}
      >
        회원가입
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default CategoryStep;
