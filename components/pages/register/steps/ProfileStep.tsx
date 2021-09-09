import {PlusSquareIcon} from '@chakra-ui/icons';
import {Avatar, Center} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import {FormContentProps} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import NicknameForm from 'components/form/formContent/NicknameForm';
import IntroduceForm from 'components/form/formContent/IntroduceForm';
import React from 'react';
import useProfileHooks from 'hooks/register/useProfileHooks';
import RegisterStepWrapper from '../RegisterStepWrapper';

const formDataKeys = ['nickname', 'introduce'];

const ProfileStep = (props: FormContentProps) => {
  const {error, onNicknameChange, onIntroduceChange, onSubmitClick} =
    useProfileHooks();

  return (
    <RegisterStepWrapper {...props} formDataKeys={formDataKeys}>
      <FormContentWrapper>
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
      </FormContentWrapper>
    </RegisterStepWrapper>
  );
};

export default ProfileStep;
