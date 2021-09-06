import {Divider} from '@chakra-ui/react';
import PageWrapper from 'components/common/PageWrapper';
import CreateGroupButton from 'components/main/CreateGroupButton';
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
      <CreateGroupButton />
    </PageWrapper>
  );
};

export default Main;
