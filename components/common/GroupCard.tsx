import {Box, Heading, HStack, Image, Link, Text} from '@chakra-ui/react';
import React from 'react';
import {colors} from 'style';
import {GroupInfo} from 'types/group';
import CardBox from './CardBox';

const GroupCardImage = (props: {imageUrl: string}) => {
  return (
    <Box
      className='imageWrapper'
      borderRadius='4px'
      overflow='hidden'
      minWidth='128px'
      height='128px'
    >
      <Image
        src={props.imageUrl}
        alt='group-image'
        fallbackSrc='https://via.placeholder.com/128'
        objectFit='cover'
        width='100%'
        height='100%'
      />
    </Box>
  );
};

const GroupCardInfo = (props: {
  name: string;
  category: string;
  description: string;
  memberCount: number;
  memberCountMax: number;
}) => {
  return (
    <Box className='groupInfoWrapper' position='relative' width='100%'>
      <Text
        className='groupCategory'
        color={colors.minorTextGray}
        marginBottom='1'
        fontSize='xs'
        {...{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'normal',
          display: '-webkit-box',
          style: {WebkitLineClamp: 1, WebkitBoxOrient: 'vertical'},
        }}
      >
        {props.category}
      </Text>
      <Heading
        className='groupName'
        fontSize='1em'
        {...{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'normal',
          display: '-webkit-box',
          style: {WebkitLineClamp: 1, WebkitBoxOrient: 'vertical'},
        }}
      >
        {props.name}
      </Heading>
      <Text
        className='groupDescription'
        fontSize='12px'
        marginBottom='20px'
        {...{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'normal',
          display: '-webkit-box',
          style: {WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'},
        }}
      >
        {props.description}
      </Text>
      <HStack
        className='groupInfoFooter'
        position='absolute'
        bottom='0'
        right='0'
      >
        <Box
          boxSize='10px'
          background='no-repeat center/960% url(/icons/userIcon.svg)'
        />
        <Text fontSize='10px' fontWeight='semibold'>
          {`(${props.memberCount}명/${props.memberCountMax}명)`}
        </Text>
        <Text color={colors.mainBlue[1]} fontWeight='bold'>
          모집중
        </Text>
      </HStack>
    </Box>
  );
};

const GroupCard = (props: GroupInfo) => {
  return (
    <CardBox className='groupCardWrapper'>
      <Link
        href={`/group/${props._id}`}
        display='flex'
        width='auto'
        padding='12px'
      >
        <HStack alignItems='stretch' width='100%'>
          <GroupCardImage imageUrl={props.imageUrls[0]} />
          <GroupCardInfo
            name={props.name}
            category={props.category.name}
            description={props.introduction}
            memberCount={props.personsCount}
            memberCountMax={props.maxPerson}
          />
        </HStack>
      </Link>
    </CardBox>
  );
};

export default GroupCard;
