import {PlusSquareIcon} from '@chakra-ui/icons';
import {Avatar, Center, FormControl, Stack} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import useFormData from 'hooks/register/useFormData';
import useIntroduceHooks from 'hooks/register/useIntroduceHooks';
import {FormContentProps} from 'types';
import {
  RegisterFormErrorMessage,
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';
import SubmitButton from './sub/SubmitButton';

const IntroduceForm = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {updateFormData} = useFormData();
  const {error, data, onNicknameChange, onIntroduceChange, isSubmittable} =
    useIntroduceHooks();

  return (
    <Stack spacing='6'>
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

      <FormControl isInvalid={error.nickname.isInvalid}>
        <RegisterFormLabel isInvalid={error.nickname.isInvalid}>
          닉네임
        </RegisterFormLabel>
        <RegisterFormInput
          placeholder='닉네임을 입력해주세요'
          onBlur={onNicknameChange}
          max={20}
        />
        <RegisterFormHelperText isInvalid={error.nickname.isInvalid}>
          20자 이내로 입력할 수 있어요.
        </RegisterFormHelperText>
        <RegisterFormErrorMessage>
          {error.nickname.message}
        </RegisterFormErrorMessage>
      </FormControl>

      <FormControl isInvalid={error.introduce.isInvalid}>
        <RegisterFormLabel isInvalid={error.introduce.isInvalid}>
          닉네임
        </RegisterFormLabel>
        <RegisterFormInput
          placeholder='자기소개를 입력해주세요'
          onBlur={onIntroduceChange}
        />
        <RegisterFormHelperText isInvalid={error.introduce.isInvalid}>
          나이와 직업, 도시 따위를 자유롭게 소개하세요.
        </RegisterFormHelperText>
        <RegisterFormErrorMessage>
          {error.introduce.message}
        </RegisterFormErrorMessage>
      </FormControl>

      <SubmitButton
        onClick={() => {
          updateFormData(data);
          onSubmit();
        }}
        disabled={isSubmittable()}
      >
        다음
      </SubmitButton>
    </Stack>
  );
};

export default IntroduceForm;
