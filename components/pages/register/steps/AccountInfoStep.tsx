import {FormContentProps} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import EmailForm from 'components/form/formContent/EmailForm';
import PasswordForm from 'components/form/formContent/PasswordForm';
import PasswordConfirmForm from 'components/form/formContent/PasswordConfirmForm';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useAccountInfoHooks from 'hooks/register/useAccountInfoHooks';
import RegisterStepWrapper from '../RegisterStepWrapper';

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
    <RegisterStepWrapper {...props} formDataKeys={formDataKeys}>
      <FormContentWrapper>
        <EmailForm error={error} onChange={onEmailChange} />
        <PasswordForm error={error} onChange={onPasswordChange} />
        <PasswordConfirmForm error={error} onChange={onPasswordConfirmChange} />
        <SubmitButton onClick={onSubmitClick}>다음</SubmitButton>
      </FormContentWrapper>
    </RegisterStepWrapper>
  );
};

export default AccountInfoStep;
