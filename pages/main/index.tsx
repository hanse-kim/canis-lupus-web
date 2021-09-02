import {Divider} from '@chakra-ui/react';
import PageWrapper from 'components/common/PageWrapper';
import MainBanner from 'components/main/MainBanner';
import MainFeed from 'components/main/MainFeed';
import RecommendGroups from 'components/main/RecommendGroups';

const Main = () => {
  return (
    <PageWrapper>
      <MainBanner />
      <RecommendGroups />
      <Divider marginY='8' />
      <MainFeed />
    </PageWrapper>
  );
};

export default Main;
