import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import PostPage from 'components/pages/group/PostPage';
import usePostInfo from 'hooks/api/usePostInfo';
import {useRouter} from 'next/dist/client/router';
import React from 'react';

const Post = () => {
  const router = useRouter();
  const {pid} = router.query;
  const {postInfo, isLoading} = usePostInfo(pid);

  if (!postInfo || isLoading) {
    return null;
  }

  return (
    <Layout>
      <PageWrapper>
        <PostPage postInfo={postInfo} />
      </PageWrapper>
    </Layout>
  );
};

export default Post;
