import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import useMobileValidation from 'hooks/form/validation/useMobileValidation';
import useMobileVerficationValidation from 'hooks/form/validation/useMobileVerficationValidation';
import {useState} from 'react';

const useMobileVerificationHooks = () => {
  const {updateFormData} = useFormData();
  const [isSend, setSend] = useState(false);
  const {validateMobile} = useMobileValidation();
  const {validateMobileVerification} = useMobileVerficationValidation();
  const [mobile, setMobile] = useState('');
  const [verificationNumber, setVerificationNumber] = useState('');
  const {error, updateFormError} = useFormError([
    'mobile',
    'mobileVerification',
  ]);

  const onMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const result = validateMobile(e.target.value);
    updateFormError({mobile: result});
    if (!result.isInvalid) {
      setMobile(e.target.value);
    }
  };

  const sendVerification = (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 서버에 인증번호 보내기 요청
    setSend(true);
  };

  const onMobileVerificationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVerificationNumber(e.target.value);
  };

  const onSubmitClick = () => {
    const result = validateMobileVerification(verificationNumber);
    if (result.isInvalid) {
      alert(result.message);
    } else {
      updateFormData({mobile: mobile});
    }
  };

  return {
    onMobileChange,
    sendVerification,
    onMobileVerificationChange,
    onSubmitClick,
    error,
    isSend,
  };
};

export default useMobileVerificationHooks;
