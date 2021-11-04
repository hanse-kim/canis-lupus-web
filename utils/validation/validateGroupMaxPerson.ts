import {ValidationResult} from 'types/hook';

const minCount = 1;
const maxCount = 15;

const validateGroupMaxPerson = (input: string) => {
  const result: ValidationResult = {isInvalid: true, message: ''};
  const inputNumber = parseInt(input);

  if (isNaN(inputNumber) || inputNumber > maxCount || inputNumber < minCount) {
    result.message = '올바른 인원 수를 입력해주세요.';
  } else {
    result.isInvalid = false;
  }

  return result;
};

export default validateGroupMaxPerson;
