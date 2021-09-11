import React, {useEffect, useState} from 'react';
import {FormContentProps} from 'types/props';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import MobileForm from 'components/form/formContent/MobileForm';
import useMobileVerificationHooks from 'hooks/register/useMobileVerificationHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';
import InputForm from 'components/form/formContent/InputForm';

const verificationTime = 180;
const formDataKeys = ['mobile'];

const MobileVerificationStep = (props: FormContentProps) => {
  const [seconds, setSeconds] = useState(verificationTime);
  const {
    isSend,
    error,
    onMobileChange,
    sendVerification,
    onMobileVerificationChange,
    onSubmitClick,
  } = useMobileVerificationHooks();

  const secondsToTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}분 ${sec}초`;
  };

  useEffect(() => {
    if (isSend) {
      if (seconds == 0) {
        // TODO: 인증시간이 만료되었을 때의 처리
        return;
      } else {
        setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    }
  }, [isSend, seconds]);

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <MobileForm
        error={error.mobile}
        onChange={onMobileChange}
        onClick={(e) => {
          sendVerification(e);
          setSeconds(verificationTime);
        }}
        isSend={isSend}
      />
      {isSend && (
        <InputForm
          error={error.mobileVerification}
          onChange={onMobileVerificationChange}
          label='인증번호'
          type='number'
          helperText={secondsToTime(seconds)}
          helperTextColor='red.500'
        />
      )}
      <SubmitButton onClick={onSubmitClick} disabled={!isSend}>
        확인
      </SubmitButton>
    </FormStepWrapper>
  );
};

export default MobileVerificationStep;
