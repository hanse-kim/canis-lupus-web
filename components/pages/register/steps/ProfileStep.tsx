import {PlusSquareIcon} from '@chakra-ui/icons';
import {Avatar, Center} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import {FormContentProps} from 'types/props';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import NicknameForm from 'components/form/formContent/NicknameForm';
import IntroduceForm from 'components/form/formContent/IntroduceForm';
import React from 'react';
import useProfileHooks from 'hooks/register/useProfileHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';

const formDataKeys = ['nickname', 'introduce'];

const ProfileStep = (props: FormContentProps) => {
  const {error, onNicknameChange, onIntroduceChange, onSubmitClick} =
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
      <NicknameForm error={error} onChange={onNicknameChange} />
      <IntroduceForm error={error} onChange={onIntroduceChange} />
      <SubmitButton onClick={onSubmitClick}>다음</SubmitButton>
    </FormStepWrapper>
  );
};

export default ProfileStep;
