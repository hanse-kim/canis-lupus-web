import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import MyGroupList from 'components/pages/mygroups/MyGroupList';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import {useEffect} from 'react';

const MyGroups = () => {
  const {isLoggedIn} = useAuth();
  const {pageRedirect} = usePageMove();

  useEffect(() => {
    if (!isLoggedIn) {
      pageRedirect('/register');
    }
  }, [isLoggedIn, pageRedirect]);

  return (
    <Layout>
      <PageWrapper>
        <MyGroupList />
      </PageWrapper>
    </Layout>
  );
};

export default MyGroups;
