import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import GroupPage from 'components/pages/group/GroupPage';
import useGroupInfo from 'hooks/api/useGroupInfo';
import {useRouter} from 'next/dist/client/router';

const tabs: {[key: string]: number} = {
  home: 0,
  posts: 1,
  quest: 2,
  chatting: 3,
};

const Group = () => {
  const router = useRouter();
  const {gid, path} = router.query;
  const {groupInfo, isLoading} = useGroupInfo(gid);

  if (!groupInfo || isLoading) {
    return null;
  }

  if (Array.isArray(path)) {
    return null;
  }

  return (
    <Layout>
      <PageWrapper>
        <GroupPage groupInfo={groupInfo} tabIndex={path ? tabs[path] : 0} />
      </PageWrapper>
    </Layout>
  );
};

export default Group;
