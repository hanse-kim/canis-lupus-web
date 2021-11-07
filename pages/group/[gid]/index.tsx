import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import GroupPage from 'components/pages/group/GroupPage';
import useGroupInfo from 'hooks/api/useGroupInfo';
import {useRouter} from 'next/dist/client/router';

const Group = () => {
  const router = useRouter();
  const {gid} = router.query;
  const {groupInfo, isLoading} = useGroupInfo(gid);

  if (!groupInfo || isLoading) {
    return null;
  }

  return (
    <Layout>
      <PageWrapper>
        <GroupPage groupInfo={groupInfo} tabIndex={0} />
      </PageWrapper>
    </Layout>
  );
};

export default Group;
