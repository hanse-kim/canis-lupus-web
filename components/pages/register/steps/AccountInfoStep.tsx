import {FormContentProps} from 'types/props';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useAccountInfoHooks from 'hooks/register/useAccountInfoHooks';
import FormStepWrapper from 'components/form/FormStepWrapper';
import InputForm from 'components/form/formContent/InputForm';
import {Stack} from '@chakra-ui/layout';

const formDataKeys = ['email', 'password'];

const AccountInfoStep = (props: FormContentProps) => {
  const {
    error,
    onEmailChange,
    onPasswordChange,
    onPasswordConfirmChange,
    onSubmitClick,
    disabled,
  } = useAccountInfoHooks();

  return (
    <FormStepWrapper {...props} formDataKeys={formDataKeys}>
      <Stack spacing='24px'>
        <InputForm
          error={error.email}
          onChange={onEmailChange}
          label='이메일'
          type='email'
          placeholder='이메일을 입력해주세요'
        />
        <InputForm
          error={error.password}
          onChange={onPasswordChange}
          label='비밀번호'
          type='password'
          placeholder='비밀번호를 입력해주세요'
          helperText='영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.'
        />
        <InputForm
          error={error.passwordConfirm}
          onChange={onPasswordConfirmChange}
          label='비밀번호 확인'
          type='password'
          placeholder='비밀번호를 한번 더 입력해주세요'
        />
      </Stack>
      <SubmitButton onClick={onSubmitClick} disabled={disabled}>
        다음
      </SubmitButton>
    </FormStepWrapper>
  );
};

export default AccountInfoStep;
