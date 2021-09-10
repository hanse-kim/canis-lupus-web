import {useCallback, useState} from 'react';

const useFormStep = <Type>(steps: Type[]) => {
  const [step, setStep] = useState<Type>(steps[0]);

  const resetStep = useCallback(() => {
    setStep(steps[0]);
  }, [steps]);

  const toNext = useCallback(() => {
    const nextIndex = steps.indexOf(step) + 1;
    setStep(steps[nextIndex]);
  }, [step, steps]);

  return {
    step,
    resetStep,
    toNext,
  };
};

export default useFormStep;
