import {ValidationResult} from 'types/hook';

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validateEmail = (input: string) => {
  const result: ValidationResult = {isInvalid: true, message: ''};
  if (!emailRegex.test(input)) {
    result.message = '올바르지 않은 이메일 형식입니다.';
  } else {
    result.isInvalid = false;
  }

  return result;
};

export default validateEmail;
