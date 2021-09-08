import React, {useEffect, useState} from 'react';
import {FormContentProps} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import MobileForm from 'components/form/formContent/MobileForm';
import MobileVerificationForm from 'components/form/formContent/MobileVerificationForm';
import useMobileVerificationHooks from 'hooks/register/useMobileVerificationHooks';

const verificationTime = 180;

const MobileVerificationStep = (props: FormContentProps) => {
  const {onSubmit} = props;
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
    <FormContentWrapper>
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
      <SubmitButton
        onClick={() => {
          onSubmitClick(onSubmit);
        }}
        disabled={!isSend}
      >
        확인
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default MobileVerificationStep;
