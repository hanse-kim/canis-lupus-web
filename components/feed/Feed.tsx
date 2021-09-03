import {Box, Flex, Heading, HStack, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {FeedInfo} from 'types';
import TextFeed from './type/TextFeed';

const FeedWrapper = (props: {children?: React.ReactNode}) => {
  return (
    <Box
      className='feedWrapper'
      paddingX='12px'
      paddingY='20px'
      boxShadow='0 0 30px 0 rgba(141, 151, 158, 0.2)'
    >
      {props.children}
    </Box>
  );
};

const FeedContent = (props: {feed: FeedInfo}) => {
  switch (props.feed.type) {
    case 'Text':
      return <TextFeed feed={props.feed} />;
    default:
      return null;
  }
};

const FeedTitle = (props: {title: string}) => {
  return (
    <Heading size='sm' marginBottom='2'>
      {props.title}
    </Heading>
  );
};

const FeedFooter = (props: {feed: FeedInfo}) => {
  return (
    <Stack spacing={1}>
      <Text
        fontSize='xs'
        color='gray.400'
      >{`${props.feed.group_name} · ${props.feed.user_nickname}`}</Text>
      <HStack spacing={3}>
        <IconAndNumber icon='heart' number={props.feed.like} />
        <IconAndNumber icon='message' number={props.feed.comment} />
      </HStack>
    </Stack>
  );
};

const IconAndNumber = (props: {icon: string; number: number}) => {
  return (
    <HStack spacing={1}>
      <Box
        boxSize='16px'
        background={`no-repeat center url(/icons/${props.icon}.svg)`}
      />
      <Text fontSize='xs' color='gray.400'>
        {props.number}
      </Text>
    </HStack>
  );
};

const Feed = (props: {feed: FeedInfo}) => {
  return (
    <FeedWrapper>
      <Flex
        height='125px'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box>
          <FeedTitle title={props.feed.title} />
          <FeedContent {...props} />
        </Box>
        <FeedFooter {...props} />
      </Flex>
    </FeedWrapper>
  );
};

export default Feed;
