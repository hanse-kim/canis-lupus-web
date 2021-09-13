import {ValidationResult} from 'types/hook';

const useNicknameValidation = () => {
  const validateNickname = (nickname: string) => {
    const result: ValidationResult = {isInvalid: true, message: ''};
    // TODO: 닉네임 유효성 체크 (중복 등)
    if (nickname === '중복') {
      result.message = '중복된 닉네임입니다.';
    } else if (nickname.length > 20) {
      result.message = '닉네임 길이가 20자보다 깁니다.';
    } else {
      result.isInvalid = false;
    }

    return result;
  };

  return {
    validateNickname,
  };
};

export default useNicknameValidation;
