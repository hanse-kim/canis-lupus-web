import {ValidationResult} from 'types/hook';

const passwordRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[A-Za-z\d@$!%*#?&]{8,}$/;

const usePasswordValidation = () => {
  const validatePassword = (input: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    if (!passwordRegex.test(input)) {
      result.message =
        '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validatePassword,
  };
};

export default usePasswordValidation;
