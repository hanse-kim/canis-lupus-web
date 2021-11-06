import {Image} from '@chakra-ui/image';
import {Box, Flex, Heading, HStack, Stack} from '@chakra-ui/layout';
import CardBox from 'components/common/CardBox';
import useUserInfo from 'hooks/api/useUserInfo';
import useGroupPosts from 'hooks/post/useGroupPosts';
import {colors} from 'style';
import {SpecificGroupInfo} from 'types/group';
import {PostInfo} from 'types/post';
import dateToKorFormat from 'utils/dateToKorFormat';

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

const PostCardBox = (props: {postInfo: PostInfo}) => {
  const {postInfo} = props;
  const {userInfo} = useUserInfo(postInfo.author);

  return (
    <CardBox paddingX='16px' paddingY='24px'>
      <Stack spacing='16px'>
        <HStack spacing='12px'>
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
        <Flex justifyContent='space-between'>
          <Stack spacing='12px'>
            <Heading fontSize='18px'>{postInfo.title}</Heading>
            <Box>{postInfo.contents}</Box>
          </Stack>{' '}
          {postInfo.imageUrls.length !== 0 && (
            <Box
              width='200px'
              height='200px'
              borderRadius='4px'
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
        <HStack spacing={3} marginTop='21px'>
          <IconAndNumber icon='heart' number={postInfo.likesCount} />
          <IconAndNumber icon='message' number={postInfo.commentsCount} />
        </HStack>
      </Stack>
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
