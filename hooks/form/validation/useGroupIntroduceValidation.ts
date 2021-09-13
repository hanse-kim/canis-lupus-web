import {ValidationResult} from 'types/hook';

const useGroupIntroduceValidation = () => {
  const validateGroupIntroduce = (introduce: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    // TODO: 모임이름 유효성 체크
    if (introduce.length < 1) {
      result.message = '모임소개를 입력해주세요.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validateGroupIntroduce,
  };
};

export default useGroupIntroduceValidation;
