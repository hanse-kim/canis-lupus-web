import {Box, Heading} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import AccountInfoForm from './formContent/AccountInfoForm';
import FormContentWrapper from './FormContentWrapper';
import MobileVerificationForm from './formContent/MobileVerificationForm';
import TermsOfUseForm from './formContent/TermsOfUseForm';

const registerSteps = [
  '이용약관',
  '계정정보입력',
  '전화번호인증',
  '자기소개입력',
  '카테고리선택',
];

const RegisterForm = () => {
  const [step, setStep] = useState('이용약관');
  const [data, setData] = useState<{[key: string]: any}>({});

  const toNext = () => {
    const nextIndex = registerSteps.indexOf(step) + 1;
    setStep(registerSteps[nextIndex]);
  };

  const submit = () => {
    return new Promise(() => {
      setTimeout(() => {
        JSON.stringify(data, null, 2);
      }, 1000);
    });
  };

  const updateData = (key: string, newData: any) => {
    setData({...data, [key]: newData});
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Box className='registerBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        회원가입
      </Heading>
      {step === '이용약관' && (
        <TermsOfUseForm update={updateData} onSubmit={toNext} />
      )}
      {step === '계정정보입력' && (
        <AccountInfoForm update={updateData} onSubmit={toNext} />
      )}
      <FormContentWrapper isEnabled={step === '전화번호인증'}>
        <MobileVerificationForm />
      </FormContentWrapper>
    </Box>
  );
};

export default RegisterForm;
