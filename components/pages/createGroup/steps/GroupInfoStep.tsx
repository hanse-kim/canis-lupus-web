import ImageUploadForm from 'components/form/formContent/ImageUploadForm';
import TextareaForm from 'components/form/formContent/TextareaForm';
import FormStepWrapper from 'components/form/FormStepWrapper';
import {FormContentProps} from 'types/props';
import InputForm from 'components/form/formContent/InputForm';
import React from 'react';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useGroupInfoHooks from 'hooks/createGroup/useGroupInfoHooks';

const formDataKeys = [/* 'imageUrl', */'name', 'introduce', 'memberCount'];

const GroupInfoStep = (props: FormContentProps) => {
  const {
    error,
    onImageChange,
    onNameChange,
    onIntroduceChange,
    onMemberCountChange,
    onSubmitClick,
  } = useGroupInfoHooks(formDataKeys);

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <ImageUploadForm
        onChange={onImageChange}
        label='모임 사진'
        placeholder='사진을 등록해주세요'
      />
      <InputForm
        error={error.name}
        onChange={onNameChange}
        label='모임이름'
        type='email'
        placeholder='모임이름을 입력해주세요.'
      />
      <TextareaForm
        error={error.introduce}
        onChange={onIntroduceChange}
        label='모임소개'
        placeholder='모임소개 및 목표를 설명해주세요.'
      />
      <InputForm
        error={error.memberCount}
        onChange={onMemberCountChange}
        label='인원 수 (1~15명)'
        maxLength={2}
        type='number'
      />
      <SubmitButton onClick={onSubmitClick}>개설하기</SubmitButton>
    </FormStepWrapper>
  );
};

export default GroupInfoStep;
