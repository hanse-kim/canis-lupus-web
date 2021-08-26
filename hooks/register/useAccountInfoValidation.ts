import produce from 'immer';
import {useState} from 'react';

const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^(?=.*?\d)(?=.*?[a-zA-Z])[A-Za-z\d@$!%*#?&]{8,}$/;

const useAccountInfoValidation = () => {
  const [error, setError] = useState<{
    [key: string]: {isInvalid: boolean; message: string | null};
  }>({
    email: {isInvalid: false, message: null},
    password: {isInvalid: false, message: null},
    passwordConfirm: {isInvalid: false, message: null},
  });

  const validateEmail = (email: string) => {
    let result = false;
    if (!emailRegex.test(email)) {
      setError(
        produce(error, (draft) => {
          (draft.email.isInvalid = true),
            (draft.email.message = '올바르지 않은 이메일 형식입니다.');
        })
      );
    } else {
      setError(
        produce(error, (draft) => {
          draft.email.isInvalid = false;
          draft.email.message = null;
        })
      );
      result = true;
    }

    return result;
  };

  const validatePassword = (password: string) => {
    let result = false;
    if (!passwordRegex.test(password)) {
      setError(
        produce(error, (draft) => {
          draft.password.isInvalid = true;
          draft.password.message =
            '비밀번호는 영문, 숫자를 포함하여 8자 이상이어야 합니다.';
        })
      );
    } else {
      setError(
        produce(error, (draft) => {
          draft.password.isInvalid = false;
          draft.password.message = null;
        })
      );
      result = true;
    }

    return result;
  };

  const validatePasswordConfirm = (
    password: string,
    passwordConfirm: string
  ) => {
    let result = false;
    if (password !== passwordConfirm) {
      setError(
        produce(error, (draft) => {
          draft.passwordConfirm.isInvalid = true;
          draft.passwordConfirm.message = '비밀번호가 일치하지 않습니다.';
        })
      );
    } else {
      setError(
        produce(error, (draft) => {
          draft.passwordConfirm.isInvalid = false;
          draft.passwordConfirm.message = null;
        })
      );
      result = true;
    }

    return result;
  };

  return {
    error,
    validateEmail,
    validatePassword,
    validatePasswordConfirm,
  };
};

export default useAccountInfoValidation;
