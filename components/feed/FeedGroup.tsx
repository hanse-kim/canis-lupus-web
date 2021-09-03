import {Grid} from '@chakra-ui/react';
import {FeedInfo} from 'types';
import Feed from './Feed';

const FeedGroup = (props: {feeds: FeedInfo[]}) => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={3}>
      {props.feeds.map((feed, index) => (
        <Feed feed={feed} key={index} />
      ))}
    </Grid>
  );
};

export default FeedGroup;
