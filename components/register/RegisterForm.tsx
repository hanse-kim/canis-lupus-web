import {Box, Button, Heading} from '@chakra-ui/react';
import {useState} from 'react';
import AccountInfoForm from './AccountInfoForm';
import FormContentWrapper from './FormContentWrapper';
import MobileVerificationForm from './MobileVerificationForm';
import TermsOfUseForm from './TermOfUseForm';

const registerSteps = [
  '이용약관',
  '계정정보입력',
  '전화번호인증',
  '자기소개입력',
  '카테고리선택',
];
const lastStep = '카테고리선택';

const RegisterForm = () => {
  const [step, setStep] = useState('이용약관');

  const toNext = () => {
    const nextIndex = registerSteps.indexOf(step) + 1;
    setStep(registerSteps[nextIndex]);
  };

  const submit = () => {};

  return (
    <Box className='registerBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        회원가입
      </Heading>
      <form style={{width: '100%'}}>
        <FormContentWrapper isEnabled={step === '이용약관'}>
          <TermsOfUseForm />
        </FormContentWrapper>
        <FormContentWrapper isEnabled={step === '계정정보입력'}>
          <AccountInfoForm />
        </FormContentWrapper>
        <FormContentWrapper isEnabled={step === '전화번호인증'}>
          <MobileVerificationForm />
        </FormContentWrapper>

        <Button
          width='full'
          height='12'
          marginTop='8'
          onClick={step === lastStep ? submit : toNext}
        >
          {step === lastStep ? '회원가입' : '다음'}
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
