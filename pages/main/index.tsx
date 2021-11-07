import {Stack} from '@chakra-ui/react';
import PageWrapper from 'components/common/PageWrapper';
import Layout from 'components/layout/Layout';
import CreateGroupButton from 'components/pages/main/CreateGroupButton';
import MainBanner from 'components/pages/main/MainBanner';
import MainFeed from 'components/pages/main/MainFeed';
import RecommendGroups from 'components/pages/main/RecommendGroups';
import usePageMove from 'hooks/usePageMove';
import React from 'react';
import {isMobile} from 'react-device-detect';

const Main = () => {
  const {pageRedirect} = usePageMove();

  if (isMobile) {
    pageRedirect('/mobile');
  }

  return (
    <Layout>
      <PageWrapper
        paddingTop='30px'
        paddingBottom='80px'
        position='relative'
        justifyContent='right'
      >
        <Stack spacing='32px'>
          <MainBanner />
          <RecommendGroups />
          <MainFeed />
        </Stack>
        <CreateGroupButton />
      </PageWrapper>
    </Layout>
  );
};

export default Main;
