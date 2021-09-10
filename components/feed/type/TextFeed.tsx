import {Box} from '@chakra-ui/react';
import {FeedInfo} from 'types/domain';

const TextFeed = (props: { feed: FeedInfo }) => {
  return (
    <Box
      fontSize='xs'
      overflow='hidden'
      textOverflow='ellipsis'
      whiteSpace='normal'
      display='-webkit-box'
      style={{WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}
    >
      {props.feed.content}
    </Box>
  );
};

export default TextFeed;
