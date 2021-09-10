import {Box, Flex, Heading, HStack, Image, Text} from '@chakra-ui/react';
import {GroupInfo} from 'types/domain';

const GroupCardImage = (props: {imageUrl: string}) => {
  return (
    <Box
      className='imageWrapper'
      borderRadius='4px'
      overflow='hidden'
      minWidth='128px'
      minHeight='128px'
    >
      <Image
        src={props.imageUrl}
        alt='group-image'
        fallbackSrc='https://via.placeholder.com/128'
        objectFit='cover'
        width='128px'
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
        color='gray.500'
        marginBottom='1'
        fontSize='xs'
      >
        {props.category}
      </Text>
      <Heading className='groupName' size='sm'>
        {props.name}
      </Heading>
      <Text
        className='groupDescription'
        fontSize='xs'
        width='173px'
        overflow='hidden'
        textOverflow='ellipsis'
        marginBottom='20px'
        whiteSpace='normal'
        display='-webkit-box'
        style={{WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}
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
        <Text fontSize='xs'>
          {`(${props.memberCount}명/${props.memberCountMax}명)`}
        </Text>
        <Text color='blue.500' fontWeight='bold'>
          모집중
        </Text>
      </HStack>
    </Box>
  );
};

const GroupCard = (props: GroupInfo) => {
  return (
    <Flex
      className='groupCardWrapper'
      width='auto'
      padding='12px'
      boxShadow='0 0 30px 0 rgba(141, 151, 158, 0.2)'
    >
      <HStack alignItems='stretch' width='100%'>
        <GroupCardImage imageUrl={props.image_url} />
        <GroupCardInfo
          name={props.name}
          category={props.category}
          description={props.description}
          memberCount={props.member_count}
          memberCountMax={props.member_count_max}
        />
      </HStack>
    </Flex>
  );
};

export default GroupCard;
