import {Box, Heading} from '@chakra-ui/react';
import {useEffect} from 'react';
import AccountInfoForm from './formContent/AccountInfoForm';
import MobileVerificationForm from './formContent/MobileVerificationForm';
import TermsOfUseForm from './formContent/TermsOfUseForm';
import useFormData from 'hooks/register/useFormData';
import useRegisterStep from 'hooks/register/useRegisterStep';
import IntroduceForm from './formContent/IntroduceForm';

const RegisterForm = () => {
  const {step, resetStep, toNextStep: toNext} = useRegisterStep();
  const {resetFormData, formData} = useFormData();

  const submit = () => {
    return new Promise(() => {
      setTimeout(() => {
        JSON.stringify(formData, null, 2);
      }, 1000);
    });
  };

  useEffect(() => {
    resetFormData();
    resetStep();
  }, []);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <Box className='registerBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        회원가입
      </Heading>
      {step === '이용약관' && <TermsOfUseForm onSubmit={toNext} />}
      {step === '계정정보입력' && <AccountInfoForm onSubmit={toNext} />}
      {step === '전화번호인증' && <MobileVerificationForm onSubmit={toNext} />}
      {step === '자기소개입력' && <IntroduceForm onSubmit={toNext} />}
    </Box>
  );
};

export default RegisterForm;
