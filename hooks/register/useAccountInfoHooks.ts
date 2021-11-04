import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import {useState} from 'react';
import validateEmail from 'utils/validation/validateEmail';
import validatePassword from 'utils/validation/validatePassword';
import validatePasswordConfirm from 'utils/validation/validatePasswordConfirm';

const useAccountInfoHooks = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const {error, updateFormError, isError} = useFormError([
    'email',
    'password',
    'passwordConfirm',
  ]);
  const {updateFormData} = useFormData();

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirm(e.target.value);
  };

  const onSubmitClick = () => {
    const validateResults = {
      email: validateEmail(email),
      password: validatePassword(password),
      passwordConfirm: validatePasswordConfirm(password, passwordConfirm),
    };
    updateFormError(validateResults);

    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      updateFormData({
        email,
        password,
      });
    }
  };

  const disabled = !email || !password || !passwordConfirm;

  return {
    error,
    isError,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    onSubmitClick,
    disabled,
  };
};

export default useAccountInfoHooks;
