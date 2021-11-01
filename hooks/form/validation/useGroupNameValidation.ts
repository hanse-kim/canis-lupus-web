import {ValidationResult} from 'types/hook';

const useGroupNameValidation = () => {
  const validateGroupName = (input: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    // TODO: 모임이름 유효성 체크
    if (input.length < 1) {
      result.message = '모임이름을 입력해주세요.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validateGroupName,
  };
};

export default useGroupNameValidation;
