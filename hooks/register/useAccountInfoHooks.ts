import produce from 'immer';
import {useState} from 'react';
import useAccountInfoValidation from './useAccountInfoValidation';

const useAccountInfoHooks = () => {
  const {error, validateEmail, validatePassword, validatePasswordConfirm} =
    useAccountInfoValidation();
  const [data, setData] = useState<{[key: string]: string}>({
    email: '',
    password: '',
  });
  const [passed, setPassed] = useState<{[key: string]: boolean}>({
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const [password, setPassword] = useState('');

  const onEmailChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setPassed(
      produce(passed, (draft) => {
        draft.email = validateEmail(email);
      })
    );
    setData(
      produce(data, (draft) => {
        draft.email = email;
      })
    );
  };

  const onPasswordChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    setPassword(pw);
    setPassed(
      produce(passed, (draft) => {
        draft.password = validatePassword(pw);
      })
    );
  };

  const onPasswordConfirmChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const pwc = e.target.value;
    setPassed(
      produce(passed, (draft) => {
        draft.passwordConfirm = validatePasswordConfirm(password, pwc);
      })
    );
    setData(
      produce(data, (draft) => {
        draft.password = pwc;
      })
    );
  };

  const isSubmittable = () => {
    return !Object.entries(passed).every(([k, v]) => v);
  };

  return {
    data,
    error,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    isSubmittable,
  };
};

export default useAccountInfoHooks;
