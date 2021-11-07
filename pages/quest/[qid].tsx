import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import PostPage from 'components/pages/group/PostPage';
import useQuestInfo from 'hooks/api/useQuestInfo';
import {useRouter} from 'next/dist/client/router';
import React from 'react';

const Quest = () => {
  const router = useRouter();
  const {pid: qid} = router.query;
  const {questInfo, isLoading} = useQuestInfo(qid);

  if (!questInfo || isLoading) {
    return null;
  }

  return (
    <Layout>
      <PageWrapper>
        <PostPage postInfo={questInfo} />
      </PageWrapper>
    </Layout>
  );
};

export default Quest;
