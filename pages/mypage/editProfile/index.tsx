import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import ProfileEdit from 'components/pages/mypage/ProfileEdit';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import React, {useEffect} from 'react';

const EditProfile = () => {
  const {isLoggedIn} = useAuth();
  const {pageRedirectWithRedirect} = usePageMove();

  useEffect(() => {
    if (!isLoggedIn) {
      pageRedirectWithRedirect('/login');
    }
  }, [isLoggedIn, pageRedirectWithRedirect]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Layout>
      <PageWrapper>
        <ProfileEdit />
      </PageWrapper>
    </Layout>
  );
};

export default EditProfile;
