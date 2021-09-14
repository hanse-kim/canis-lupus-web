import {Divider} from '@chakra-ui/react';
import PageWrapper from 'components/common/PageWrapper';
import CreateGroupButton from 'components/pages/main/CreateGroupButton';
import MainBanner from 'components/pages/main/MainBanner';
import MainFeed from 'components/pages/main/MainFeed';
import RecommendGroups from 'components/pages/main/RecommendGroups';

const Main = () => {
  return (
    <PageWrapper>
      <MainBanner />
      <RecommendGroups />
      <Divider marginY='8' />
      <MainFeed />
      <CreateGroupButton />
    </PageWrapper>
  );
};

export default Main;
