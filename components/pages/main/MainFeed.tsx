import LabeledContainer from 'components/common/LabeledContainer';
import LoadingSpinner from 'components/common/LoadingSpinner';
import FeedGroup from 'components/feed/FeedGroup';
import useFeedList from 'hooks/api/useMainFeed';

const MainFeed = () => {
  const {feedList, isLoading} = useFeedList({limit: 4});

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <LabeledContainer label='뭐하고 있을까?'>
      <FeedGroup feeds={feedList} />
    </LabeledContainer>
  );
};

export default MainFeed;
