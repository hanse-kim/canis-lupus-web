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
  const [pw, setPW] = useState('');
  const [pwc, setPWC] = useState('');
  const {error, updateFormError, isError} = useFormError([
    'email',
    'password',
    'passwordConfirm',
  ]);
  const {updateFormData} = useFormData();

  const onEmailFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const result = validateEmail(e.target.value);
    updateFormError({email: result});
    if (!result.isInvalid) {
      updateFormData({email: e.target.value});
    }
  };

  const onPasswordFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    const result = validatePassword(e.target.value);
    updateFormError({password: result});
    if (!result.isInvalid) {
      updateFormData({password: e.target.value});
    }
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPW(e.target.value);
    const result = validatePasswordConfirm(e.target.value, pwc);
    updateFormError({passwordConfirm: result});
  };

  const onPasswordConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPWC(e.target.value);
    const result = validatePasswordConfirm(pw, e.target.value);
    updateFormError({passwordConfirm: result});
  };

  return {
    error,
    isError,
    onEmailFocusOut,
    onPasswordFocusOut,
    onPasswordChange,
    onPasswordConfirmChange,
  };
};

export default useAccountInfoHooks;
