import {ValidationResult} from 'types/hook';

const validateGroupImage = (input?: File) => {
  const result: ValidationResult = {isInvalid: true, message: ''};
  // TODO: 그룹이미지 유효성 체크
  if (false) {
    result.message = '모임소개를 입력해주세요.';
  } else {
    result.isInvalid = false;
  }

  return result;
};

export default validateGroupImage;
