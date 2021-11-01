import {FormContentProps} from 'types/props';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import InputForm from 'components/form/formContent/InputForm';
import React from 'react';
import useProfileHooks from 'hooks/register/useProfileHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';
import ProfileImageUploadForm from 'components/form/formContent/ProfileImageUploadForm';

const formDataKeys = ['name', 'introduce'];

const ProfileStep = (props: FormContentProps) => {
  const {
    error,
    profileImageUrl,
    onPropfileImageChange,
    onNameChange,
    onIntroduceChange,
    onSubmitClick,
  } = useProfileHooks();
  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <ProfileImageUploadForm
        onChange={onPropfileImageChange}
        imageUrl={profileImageUrl}
      />
      <InputForm
        error={error.name}
        onChange={onNameChange}
        label='닉네임'
        placeholder='닉네임을 입력해주세요'
        maxLength={20}
        helperText='20자 이내로 입력할 수 있어요'
      />
      <InputForm
        error={error.introduce}
        onChange={onIntroduceChange}
        label='자기소개'
        placeholder='자기소개를 입력해주세요'
        helperText='나이와 직업, 도시 따위를 자유롭게 소개하세요.'
      />
      <SubmitButton onClick={onSubmitClick}>다음</SubmitButton>
    </FormStepWrapper>
  );
};

export default ProfileStep;
