import {ValidationResult} from 'types/hook';

const mobileRegex = /^01\d{1}\d{3,4}\d{4}$/;

const useMobileValidation = () => {
  const validateMobile = (mobile: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    if (!mobileRegex.test(mobile)) {
      result.message = '올바르지 않은 전화번호 형식입니다.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validateMobile,
  };
};

export default useMobileValidation;
