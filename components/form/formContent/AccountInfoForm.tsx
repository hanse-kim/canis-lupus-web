import useFormData from 'hooks/form/useFormData';
import React, {useEffect, useState} from 'react';
import {FormContentProps} from 'types';
import FormContentWrapper from '../FormContentWrapper';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import PasswordConfirmForm from './PasswordConfirmForm';
import SubmitButton from './sub/SubmitButton';
import useAccountInfoHooks from 'hooks/register/useAccountInfoHooks';

const keys = ['email', 'password'];

const AccountInfoForm = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {formDataContainsKey} = useFormData();
  const [isSubmittable, setSubmittable] = useState(false);
  const {
    error,
    isError,
    onEmailFocusOut,
    onPasswordFocusOut,
    onPasswordChange,
    onPasswordConfirmChange,
  } = useAccountInfoHooks();

  useEffect(() => {
    setSubmittable(formDataContainsKey(keys) && !isError());
  }, [formDataContainsKey, isError]);

  return (
    <FormContentWrapper>
      <EmailForm error={error} onFocusOut={onEmailFocusOut} />
      <PasswordForm
        error={error}
        onFocusOut={onPasswordFocusOut}
        onChange={onPasswordChange}
      />
      <PasswordConfirmForm error={error} onChange={onPasswordConfirmChange} />
      <SubmitButton onClick={onSubmit} disabled={!isSubmittable}>
        다음
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default AccountInfoForm;
