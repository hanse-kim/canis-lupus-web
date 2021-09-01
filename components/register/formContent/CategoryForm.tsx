import {FormControl} from '@chakra-ui/react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useCategoryList from 'hooks/register/useCategoryList';
import useFormData from 'hooks/register/useFormData';
import React, {useState} from 'react';
import {FormContentProps} from 'types';
import FormContentWrapper from '../FormContentWrapper';
import CategoryCheckbox from './sub/CategoryCheckbox';
import {RegisterFormLabel} from './sub/RegisterFormItems';
import SubmitButton from './sub/SubmitButton';

const CategoryForm = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {categoryList, isLoading} = useCategoryList();
  const {updateFormData} = useFormData();
  const [checked, setChecked] = useState<string[]>([]);

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
          onSubmit();
        }}
      >
        회원가입
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default CategoryForm;
