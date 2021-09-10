import {FormContentProps} from 'types/props';
import EmailForm from 'components/form/formContent/EmailForm';
import PasswordForm from 'components/form/formContent/PasswordForm';
import PasswordConfirmForm from 'components/form/formContent/PasswordConfirmForm';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useAccountInfoHooks from 'hooks/register/useAccountInfoHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';

const formDataKeys = ['email', 'password'];

const AccountInfoStep = (props: FormContentProps) => {
  const {
    error,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    onSubmitClick,
  } = useAccountInfoHooks();

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <EmailForm error={error} onChange={onEmailChange} />
      <PasswordForm error={error} onChange={onPasswordChange} />
      <PasswordConfirmForm error={error} onChange={onPasswordConfirmChange} />
      <SubmitButton onClick={onSubmitClick}>다음</SubmitButton>
    </FormStepWrapper>
  );
};

export default AccountInfoStep;
