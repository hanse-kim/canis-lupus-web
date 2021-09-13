import {ValidationResult} from 'types/hook';

const usePasswordConfirmValidation = () => {
  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string
  ) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    if (password !== passwordConfirm) {
      result.message = '비밀번호가 일치하지 않습니다.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validatePasswordConfirm,
  };
};

export default usePasswordConfirmValidation;
