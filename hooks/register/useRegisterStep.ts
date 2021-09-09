import {useCallback, useState} from 'react';

const registerSteps: RegisterStepType[] = [
  '이용약관',
  '계정정보입력',
  '전화번호인증',
  '자기소개입력',
  '관심분야선택',
];

type RegisterStepType =
  | '이용약관'
  | '계정정보입력'
  | '전화번호인증'
  | '자기소개입력'
  | '관심분야선택';

const useRegisterStep = () => {
  const [step, setStep] = useState<RegisterStepType>(registerSteps[0]);

  const resetStep = useCallback(() => {
    setStep(registerSteps[0]);
  }, []);

  const toNextStep = useCallback(() => {
    const nextIndex = registerSteps.indexOf(step) + 1;
    setStep(registerSteps[nextIndex]);
  }, [step]);

  return {
    step,
    resetStep,
    toNextStep,
  };
};

export default useRegisterStep;
