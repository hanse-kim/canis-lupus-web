import {useState} from 'react';

const registerSteps = [
  '이용약관',
  '계정정보입력',
  '전화번호인증',
  '자기소개입력',
  '카테고리선택',
];

const useRegisterStep = () => {
  const [step, setStep] = useState('');

  const resetStep = () => {
    setStep(registerSteps[0]);
  };

  const toNextStep = () => {
    const nextIndex = registerSteps.indexOf(step) + 1;
    setStep(registerSteps[nextIndex]);
  };

  return {
    step,
    resetStep,
    toNextStep,
  };
};

export default useRegisterStep;
