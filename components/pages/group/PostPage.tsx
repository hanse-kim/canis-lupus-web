import {Box, Divider, Flex, Heading, HStack, Stack} from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image';
import {
  Tabs,
  Button as ChakraButton,
  ButtonProps,
  Input,
  InputProps,
} from '@chakra-ui/react';
import CardBox from 'components/common/CardBox';
import React, {useEffect, useState} from 'react';
import {CommentInfo, PostInfo} from 'types/post';
import {PostCardHeader} from './containers/PostContainer';
import {GroupTabs, GroupTitle} from './GroupPage';
import {colors} from 'style';
import {ChatIcon} from '@chakra-ui/icons';
import useAuth from 'hooks/auth/useAuth';
import useLike from 'hooks/post/useLike';
import dateToKorFormat from 'utils/dateToKorFormat';
import {Button} from 'components/common/_basic';
import usePageMove from 'hooks/usePageMove';

const tabsPath = ['main', 'posts', 'quest', 'chatting'];

const PostCardContentWithOutImage = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;

  return (
    <Flex className='contents' justifyContent='space-between'>
      <Stack spacing='12px'>
        <Heading fontSize='18px'>{postInfo.title}</Heading>
        <Box>{postInfo.contents}</Box>
      </Stack>
    </Flex>
  );
};

const PostImage = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;

  if (!postInfo.imageUrls[0]) {
    return null;
  }

  return (
    <Box width='100%' height='fit-content'>
      <Image
        width='100%'
        height='100%'
        src={postInfo.imageUrls[0]}
        alt='postImage'
      />
    </Box>
  );
};

const PostFooter = (props: {postInfo: PostInfo}) => {
  const {userData} = useAuth();
  const {postInfo} = props;
  const [isLike, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const {like} = useLike(() => {
    setLike(!isLike);
    setLikeCount(isLike ? likeCount - 1 : likeCount + 1);
  });

  const onLikeClick = () => {
    like({postId: postInfo._id, userId: userData._id});
  };

  useEffect(() => {
    if (userData) {
      setLike(postInfo.likes.includes(userData._id));
      setLikeCount(postInfo.likesCount);
    }
  }, [postInfo.likes, postInfo.likesCount, userData, userData._id]);

  return (
    <Box>
      <Stack spacing='16px'>
        <HStack
          spacing='8px'
          color={colors.minorTextGray}
          fontSize='12px'
          marginTop='36px'
        >
          <Box>좋아요 {likeCount}개</Box>
          <Box>댓글 {postInfo.commentsCount}개</Box>
        </HStack>
        <HStack spacing='8px'>
          <LikeButton onClick={onLikeClick} isLike={isLike} />
          <CommentButton onClick={() => {}} />
        </HStack>
      </Stack>
      <CommentContainer comments={postInfo.comments} />
      <CommentForm />
    </Box>
  );
};

const LikeButton = (props: ButtonProps & {isLike?: boolean}) => {
  const {isLike, ...buttonProps} = props;

  return (
    <ChakraButton
      fontWeight='normal'
      variant='outline'
      color={isLike ? colors.likeRed : colors.minorTextGray}
      height='36px'
      borderRadius='4px'
      width='full'
      {...buttonProps}
    >
      <HStack>
        <Box width='16px' height='16px'>
          {isLike && (
            <Image
              src='/icons/icon_heart_filled.svg'
              alt='like'
              width='full'
              height='full'
            />
          )}
          {!isLike && (
            <Image
              src='/icons/icon_heart_empty.svg'
              alt='like'
              width='full'
              height='full'
            />
          )}
        </Box>
        <Box>좋아요</Box>
      </HStack>
    </ChakraButton>
  );
};

const CommentButton = (props: ButtonProps) => {
  return (
    <ChakraButton
      fontWeight='normal'
      variant='outline'
      color={colors.minorTextGray}
      height='36px'
      borderRadius='4px'
      width='full'
    >
      <HStack>
        <ChatIcon />
        <Box>댓글 작성</Box>
      </HStack>
    </ChakraButton>
  );
};

const Comment = (props: {commentInfo: CommentInfo}) => {
  const {commentInfo} = props;

  return (
    <Box>
      <Stack spacing='8px'>
        <HStack spacing='12px'>
          <Box borderRadius='full' width='36px' height='36px'>
            <Image
              src={commentInfo.author.imageUrl}
              height='full'
              width='full'
              alt='commentProfileImage'
            />
          </Box>
        </HStack>
        <Box className='time'>{dateToKorFormat(commentInfo.updatedAt)}</Box>
      </Stack>
      <Divider borderColor='#ebebeb' />
    </Box>
  );
};

const CommentContainer = (props: {comments: CommentInfo[]}) => {
  return (
    <Box className='commentContainer' marginTop='16px'>
      {props.comments.map((item, index) => {
        return <Comment commentInfo={item} key={index} />;
      })}
    </Box>
  );
};

const CommentForm = (props: InputProps) => {
  return (
    <HStack height='42px' marginTop='12px'>
      <Input variant='filled' placeholder='메시지' height='full' {...props} />
      <Button width='120px' height='full'>
        전송
      </Button>
    </HStack>
  );
};

const PostPageTab = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;
  const userInfo = postInfo.author;

  return (
    <Box paddingX='16px' paddingY='24px'>
      <Stack spacing='16px'>
        <PostCardHeader userInfo={userInfo} postInfo={postInfo} />
        <PostCardContentWithOutImage postInfo={postInfo} />
        <PostImage postInfo={postInfo} />
      </Stack>
      <PostFooter postInfo={postInfo} />
    </Box>
  );
};

const PostPage = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;
  const groupInfo = postInfo.meeting;
  const {pageMove} = usePageMove();

  return (
    <Stack
      className='groupPageContainer'
      spacing='16px'
      marginTop='36px'
      marginBottom='80px'
    >
      <CardBox borderRadius='8pt' overflow='hidden'>
        <GroupTitle groupTitle={groupInfo.name} />
        <Tabs
          isFitted
          defaultIndex={1}
          onChange={(index) => {
            pageMove(`/group/${groupInfo._id}/${tabsPath[index]}`);
          }}
        >
          <GroupTabs />
        </Tabs>
        <PostPageTab postInfo={postInfo} />
      </CardBox>
    </Stack>
  );
};

export default PostPage;
