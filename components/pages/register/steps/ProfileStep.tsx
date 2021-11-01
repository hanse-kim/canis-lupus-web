import {PlusSquareIcon} from '@chakra-ui/icons';
import {Avatar, Center} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import {FormContentProps} from 'types/props';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import InputForm from 'components/form/formContent/InputForm';
import React from 'react';
import useProfileHooks from 'hooks/register/useProfileHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';

const formDataKeys = ['name', 'introduce'];

const ProfileStep = (props: FormContentProps) => {
  const {error, onNameChange, onIntroduceChange, onSubmitClick} =
    useProfileHooks();

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <Center>
        <Avatar size='2xl'>
          <ImageUploadButton
            buttonProps={{
              position: 'absolute',
              right: '0',
              bottom: '0',
              borderRadius: '9999',
              padding: '0',
            }}
            onChange={undefined}
          >
            <PlusSquareIcon />
          </ImageUploadButton>
        </Avatar>
      </Center>
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
