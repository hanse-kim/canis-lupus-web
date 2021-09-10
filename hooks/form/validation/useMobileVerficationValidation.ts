import {ValidationResult} from 'types/domain';

const useMobileVerficationValidation = () => {
  const validateMobileVerification = (mobile: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    if (mobile.length == 0) {
      result.message = '인증번호가 다릅니다.';
      // TODO: 인증번호 검증
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {validateMobileVerification};
};

export default useMobileVerficationValidation;
