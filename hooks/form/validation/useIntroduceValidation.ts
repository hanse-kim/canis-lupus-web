import {ValidationResult} from 'types/hook';

const useIntroduceValidation = () => {
  const validateIntroduce = (input: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    // TODO: 자기소개 유효성 체크 (금지어 등)
    if (input.length === 0) {
      result.message = '자기소개를 입력해주세요.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validateIntroduce,
  };
};

export default useIntroduceValidation;
