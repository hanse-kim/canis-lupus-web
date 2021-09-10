import {Box, Heading} from '@chakra-ui/react';
import {useCallback, useEffect} from 'react';
import TermsOfUseStep from './steps/TermsOfUseStep';
import useFormData from 'hooks/form/useFormData';
import useFormStep from 'hooks/form/useFormStep';
import ProfileStep from './steps/ProfileStep';
import SelectInterestsStep from './steps/SelectInterestsStep';
import usePageMove from 'hooks/usePageMove';
import AccountInfoStep from 'components/pages/register/steps/AccountInfoStep';
import MobileVerificationStep from './steps/MobileVerificationStep';

const registerSteps = [
  '이용약관',
  '계정정보입력',
  '전화번호인증',
  '자기소개입력',
  '관심분야선택',
] as const;
type RegisterStepType = typeof registerSteps[number];
const steps = registerSteps.slice();

const RegisterForm = () => {
  const {step, resetStep, toNext} = useFormStep<RegisterStepType>(steps);
  const {resetFormData, formData} = useFormData();
  const {getRedirect, pageMove} = usePageMove();

  const submit = useCallback(() => {
    alert(JSON.stringify(formData, null, 2));
    const redirect = getRedirect();
    if (redirect) {
      pageMove(redirect);
    } else {
      pageMove('/main');
    }
  }, [formData, getRedirect, pageMove]);

  useEffect(() => {
    resetFormData();
    resetStep();
  }, [resetFormData, resetStep]);

  return (
    <Box className='registerBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        회원가입
      </Heading>
      {step === '이용약관' && <TermsOfUseStep onSubmit={toNext} />}
      {step === '계정정보입력' && <AccountInfoStep onSubmit={toNext} />}
      {step === '전화번호인증' && <MobileVerificationStep onSubmit={toNext} />}
      {step === '자기소개입력' && <ProfileStep onSubmit={toNext} />}
      {step === '관심분야선택' && <SelectInterestsStep onSubmit={submit} />}
    </Box>
  );
};

export default RegisterForm;
