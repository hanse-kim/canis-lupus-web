import produce from 'immer';
import {useState} from 'react';
import useAccountInfoValidation from './useAccountInfoValidation';
import useSubmitChecker from './useSubmitChecker';

const useAccountInfoHooks = () => {
  const {error, validateEmail, validatePassword, validatePasswordConfirm} =
    useAccountInfoValidation();
  const [data, setData] = useState<{[key: string]: string}>({
    email: '',
    password: '',
  });
  const {setPassed, isSubmittable} = useSubmitChecker([
    'email',
    'password',
    'passwordConfirm',
  ]);
  const [password, setPassword] = useState('');

  const onEmailChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setPassed('email', validateEmail(email));
    setData(
      produce(data, (draft) => {
        draft.email = email;
      })
    );
  };

  const onPasswordChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const pw = e.target.value;
    setPassword(pw);
    setPassed('password', validatePassword(pw));
  };

  const onPasswordConfirmChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const pwc = e.target.value;
    setPassed('passwordConfirm', validatePasswordConfirm(password, pwc));
    setData(
      produce(data, (draft) => {
        draft.password = pwc;
      })
    );
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
