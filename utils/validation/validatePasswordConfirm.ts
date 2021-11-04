import {ValidationResult} from 'types/hook';

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

export default validatePasswordConfirm;
