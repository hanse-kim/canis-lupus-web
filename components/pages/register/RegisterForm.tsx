import {Box, Heading} from '@chakra-ui/react';
import {useEffect} from 'react';
import TermsOfUseForm from '../../form/formContent/TermsOfUseForm';
import useFormData from 'hooks/form/useFormData';
import useRegisterStep from 'hooks/register/useRegisterStep';
import IntroduceForm from '../../form/formContent/IntroduceForm';
import CategoryForm from '../../form/formContent/CategoryForm';
import usePageMove from 'hooks/usePageMove';
import AccountInfoForm from 'components/form/formContent/AccountInfoForm';
import MobileVerificationForm from '../../form/formContent/MobileVerificationForm';

const RegisterForm = () => {
  const {step, resetStep, toNextStep: toNext} = useRegisterStep();
  const {resetFormData, formData} = useFormData();
  const {getRedirect, pageMove} = usePageMove();

  const submit = () => {
    alert(JSON.stringify(formData, null, 2));
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
      {step === '이용약관' && <TermsOfUseForm onSubmit={toNext} />}
      {step === '계정정보입력' && <AccountInfoForm onSubmit={toNext} />}
      {step === '전화번호인증' && <MobileVerificationForm onSubmit={toNext} />}
      {step === '자기소개입력' && <IntroduceForm onSubmit={toNext} />}
      {step === '카테고리선택' && <CategoryForm onSubmit={submit} />}
    </Box>
  );
};

export default RegisterForm;
