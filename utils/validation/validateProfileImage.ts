import {ValidationResult} from 'types/hook';

const validateProfileImage = (input: File | undefined) => {
  const result: ValidationResult = {isInvalid: true, message: ''};
  if (input == undefined) {
    result.message = '프로필 이미지를 업로드해주시기 바랍니다.';
  } else {
    result.isInvalid = false;
  }

  return result;
};

export default validateProfileImage;
