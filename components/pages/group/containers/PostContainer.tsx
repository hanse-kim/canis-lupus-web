import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Box, Flex, Heading, HStack, Link, Stack} from '@chakra-ui/layout';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/popover';
import CardBox from 'components/common/CardBox';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useDeletePost from 'hooks/post/useDeletePost';
import useGroupPosts from 'hooks/post/useGroupPosts';
import React from 'react';
import {colors} from 'style';
import {UserInfo} from 'types/auth';
import {SpecificGroupInfo} from 'types/group';
import {PostInfo} from 'types/post';
import dateToKorFormat from 'utils/dateToKorFormat';

const PostMorePop = (props: {postInfo: PostInfo; userInfo?: UserInfo}) => {
  const {postInfo, userInfo} = props;
  const {deletePost, isDeleting} = useDeletePost();

  if (!userInfo || userInfo._id !== postInfo.author._id) {
    return null;
  }

  if (isDeleting) {
    return <LoadingSpinner />;
  }

  return (
    <Popover placement='bottom-end'>
      <PopoverTrigger>
        <Button
          width='24px'
          height='24px'
          variant='ghost'
          padding='0'
          margin='0'
        >
          <Image src='/images/more_button.svg' alt='more' />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody padding='0'>
          {/* <Button
            variant='ghost'
            width='full'
            padding='0'
            margin='0'
            height='48px'
          >
            수정하기
          </Button> */}
          <Button
            onClick={() => {
              deletePost(postInfo);
            }}
            variant='ghost'
            width='full'
            padding='0'
            margin='0'
            height='48px'
            color='#ff5847'
          >
            삭제하기
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export const PostCardHeader = (props: {
  postInfo: PostInfo;
  userInfo?: UserInfo;
}) => {
  const {userInfo, postInfo} = props;

  return (
    <Flex className='header' justifyContent='space-between'>
      <HStack className='profile' spacing='12px'>
        <Box
          className='profileImage'
          width='60px'
          height='60px'
          borderRadius='full'
          overflow='hidden'
        >
          <Image
            src={userInfo?.imageUrl}
            alt='profile'
            width='full'
            height='full'
            objectFit='cover'
          />
        </Box>
        <Stack spacing='2px'>
          <Box fontSize='16px' fontWeight='bold'>
            {userInfo?.name}
          </Box>
          <Box fontSize='12px' color={colors.minorTextGray}>
            {dateToKorFormat(postInfo.updatedAt)}
          </Box>
        </Stack>
      </HStack>
    </Flex>
  );
};

export const PostCardContent = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;

  return (
    <Flex className='contents' justifyContent='space-between'>
      <Stack spacing='12px'>
        <Heading fontSize='18px'>{postInfo.title}</Heading>
        <Box>{postInfo.contents}</Box>
      </Stack>
      {postInfo.imageUrls.length !== 0 && (
        <Box
          width='200px'
          height='200px'
          borderRadius='4px'
          overflow='hidden'
          marginLeft='12px'
        >
          <Image
            src={postInfo.imageUrls[0]}
            alt='postImage'
            width='full'
            height='full'
            objectFit='cover'
          />
        </Box>
      )}
    </Flex>
  );
};

const IconAndNumber = (props: {icon: string; number: number}) => {
  return (
    <HStack spacing={1} color={colors.minorTextGray}>
      <Box
        boxSize='16px'
        background={`no-repeat center url(/icons/${props.icon}.svg)`}
      />
      <Box fontSize='10px'>{props.number}</Box>
    </HStack>
  );
};

export const PostCardBox = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;
  const userInfo = postInfo.author;

  return (
    <CardBox
      paddingX='16px'
      paddingY='24px'
      borderRadius='8px'
      position='relative'
    >
      <Link href={`/post/${postInfo._id}`}>
        <Stack spacing='16px'>
          <PostCardHeader postInfo={postInfo} userInfo={userInfo} />
          <PostCardContent postInfo={postInfo} />
          <HStack className='footer' spacing={3} marginTop='21px'>
            <IconAndNumber icon='heart' number={postInfo.likesCount} />
            <IconAndNumber icon='message' number={postInfo.commentsCount} />
          </HStack>
        </Stack>
      </Link>
      <Box position='absolute' top='16px' right='16px'>
        <PostMorePop userInfo={userInfo} postInfo={postInfo} />
      </Box>
    </CardBox>
  );
};

const PostContainer = (props: {groupInfo: SpecificGroupInfo}) => {
  const {groupPosts, isLoading} = useGroupPosts(props.groupInfo._id);

  if (isLoading) {
    return null;
  }

  return (
    <Stack spacing='16px'>
      {groupPosts.map((item, index) => {
        return <PostCardBox key={index} postInfo={item} />;
      })}
    </Stack>
  );
};

export default PostContainer;
