import React, {useEffect, useState} from 'react';
import {FormContentProps} from 'types/props';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import MobileForm from 'components/form/formContent/MobileForm';
import MobileVerificationForm from 'components/form/formContent/MobileVerificationForm';
import useMobileVerificationHooks from 'hooks/register/useMobileVerificationHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';

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
        error={error}
        onChange={onMobileChange}
        onClick={(e) => {
          sendVerification(e);
          setSeconds(verificationTime);
        }}
        isSend={isSend}
      />
      {isSend && (
        <MobileVerificationForm
          error={error}
          onChange={onMobileVerificationChange}
          seconds={seconds}
        />
      )}
      <SubmitButton onClick={onSubmitClick} disabled={!isSend}>
        확인
      </SubmitButton>
    </FormStepWrapper>
  );
};

export default MobileVerificationStep;
