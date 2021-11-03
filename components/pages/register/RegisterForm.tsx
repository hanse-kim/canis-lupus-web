import {Box} from '@chakra-ui/react';
import {useCallback, useEffect} from 'react';
import TermsOfUseStep from './steps/TermsOfUseStep';
import useFormData from 'hooks/form/useFormData';
import useFormStep from 'hooks/form/useFormStep';
import ProfileStep from './steps/ProfileStep';
import SelectInterestsStep from './steps/SelectInterestsStep';
import usePageMove from 'hooks/usePageMove';
import AccountInfoStep from 'components/pages/register/steps/AccountInfoStep';
import useRegister from 'hooks/auth/useRegister';
import {RegisterData} from 'types/auth';

const registerSteps = [
  '이용약관',
  '계정정보입력',
  '자기소개입력',
  '관심분야선택',
] as const;
type RegisterStepType = typeof registerSteps[number];
const steps = registerSteps.slice();

const RegisterForm = () => {
  const {step, resetStep, toNext} = useFormStep<RegisterStepType>(steps);
  const {resetFormData, formData} = useFormData();
  const {pageMove} = usePageMove();
  const {register, isRegistering} = useRegister(() => {
    pageMove('/main');
  });

  const submit = useCallback(async () => {
    register(formData as RegisterData);
  }, [formData, register]);

  useEffect(() => {
    resetFormData();
    resetStep();
  }, [resetFormData, resetStep]);

  return (
    <Box
      className='registerBox'
      maxWidth='360px'
      marginX='auto'
      paddingY='140px'
    >
      {step === '이용약관' && (
        <TermsOfUseStep onSubmit={toNext} heading='이건모임 약관 동의' />
      )}
      {step === '계정정보입력' && (
        <AccountInfoStep onSubmit={toNext} heading='이메일로 회원가입' />
      )}
      {step === '자기소개입력' && (
        <ProfileStep onSubmit={toNext} heading='자신을 멋지게 소개해보세요' />
      )}
      {step === '관심분야선택' && (
        <SelectInterestsStep
          onSubmit={submit}
          isLoading={isRegistering}
          heading='관심 카테고리 선택'
        />
      )}
    </Box>
  );
};

export default RegisterForm;
