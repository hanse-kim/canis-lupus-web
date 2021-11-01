import {Box, Heading} from '@chakra-ui/react';
import {useEffect} from 'react';
import TermsOfUseStep from './steps/TermsOfUseStep';
import useFormData from 'hooks/form/useFormData';
import useFormStep from 'hooks/form/useFormStep';
import ProfileStep from './steps/ProfileStep';
import SelectInterestsStep from './steps/SelectInterestsStep';
import usePageMove from 'hooks/usePageMove';
import AccountInfoStep from 'components/pages/register/steps/AccountInfoStep';
import axios from 'axios';

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
  const {getRedirect, pageMove} = usePageMove();

  const submit = async () => {
    const response = await axios.post('/api/register/signUp', formData);
    if (response.status === 201) {
      const data = response.data;
      localStorage.setItem('user', JSON.stringify(data));
    }

    const redirect = getRedirect();
    if (redirect) {
      pageMove(redirect);
    } else {
      pageMove('/main');
    }
  };

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
      {step === '자기소개입력' && <ProfileStep onSubmit={toNext} />}
      {step === '관심분야선택' && <SelectInterestsStep onSubmit={submit} />}
    </Box>
  );
};

export default RegisterForm;
