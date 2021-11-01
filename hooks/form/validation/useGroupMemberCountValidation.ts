import {ValidationResult} from 'types/hook';

const minCount = 1;
const maxCount = 15;

const useGroupMemberCountValidation = () => {
  const validateGroupMemberCount = (input: number) => {
    const result: ValidationResult = {isInvalid: true, message: ''};

    if (isNaN(input) || input > maxCount || input < minCount) {
      result.message = '올바른 인원 수를 입력해주세요.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validateGroupMemberCount,
  };
};

export default useGroupMemberCountValidation;
