import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import usePasswordConfirmValidation from 'hooks/form/validation/usePasswordConfirmValidation';
import usePasswordValidation from 'hooks/form/validation/usePasswordValidation';
import {useState} from 'react';
import useEmailValidation from '../form/validation/useEmailValidation';

const useAccountInfoHooks = () => {
  const {validateEmail} = useEmailValidation();
  const {validatePassword} = usePasswordValidation();
  const {validatePasswordConfirm} = usePasswordConfirmValidation();
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

  return {
    error,
    isError,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    onSubmitClick,
  };
};

export default useAccountInfoHooks;
