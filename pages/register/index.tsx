import PageWrapper from 'components/common/PageWrapper';
import RegisterForm from 'components/pages/register/RegisterForm';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import {useEffect} from 'react';

const Register = () => {
  const {isLoggedIn} = useAuth();
  const {pageRedirectWithRedirect} = usePageMove();

  useEffect(() => {
    if (isLoggedIn) {
      pageRedirectWithRedirect('/');
    }
  }, [isLoggedIn, pageRedirectWithRedirect]);

  if (isLoggedIn) {
    return null;
  }

  return (
    <PageWrapper>
      <RegisterForm />
    </PageWrapper>
  );
};

export default Register;
