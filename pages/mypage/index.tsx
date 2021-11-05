import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import MyPageContainer from 'components/pages/mypage/MyPage';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import {useEffect} from 'react';

const MyPage = () => {
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
        <MyPageContainer />
      </PageWrapper>
    </Layout>
  );
};

export default MyPage;
