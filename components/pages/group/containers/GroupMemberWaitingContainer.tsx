import {Image} from '@chakra-ui/image';
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
} from '@chakra-ui/layout';
import CardBox from 'components/common/CardBox';
import {Button} from 'components/common/_basic';
import useAcceptJoinForm from 'hooks/group/useAcceptJoinForm';
import React from 'react';
import {UserInfo} from 'types/auth';
import {SpecificGroupInfo} from 'types/group';

const MemberListItem = (props: {userInfo: UserInfo; groupId: string}) => {
  const {userInfo, groupId} = props;
  const {onJoinClick} = useAcceptJoinForm(groupId, userInfo._id);

  return (
    <Box className='memberListItem'>
      <Flex justifyContent='space-between' height='80px'>
        <HStack spacing='12px' alignItems='center'>
          <Box
            className='profileImageFrame'
            width='60px'
            height='60px'
            borderRadius='full'
            overflow='hidden'
          >
            <Image
              src={userInfo.imageUrl}
              alt='profileImage'
              width='full'
              height='full'
              objectFit='cover'
              fallbackSrc='/profileFallback.png'
            />
          </Box>
          <Stack>
            <Box fontSize='16px' fontWeight='semibold'>
              {userInfo.name}
            </Box>
            <Box fontSize='12px'>{userInfo.introduce}</Box>
          </Stack>
        </HStack>
        <Center>
          <Button fontSize='16px' onClick={onJoinClick}>
            수락
          </Button>
        </Center>
      </Flex>
      <Divider borderColor='#eee' />
    </Box>
  );
};

const GroupMemberWaitingContainer = (props: {groupInfo: SpecificGroupInfo}) => {
  const {groupInfo} = props;

  return (
    <CardBox
      className='memberContainer'
      borderRadius='8pt'
      overflow='hidden'
      paddingX='16px'
      paddingY='24px'
    >
      <Heading fontSize='16px' marginBottom='24px'>
        가입 신청 인원 ({groupInfo.persons.waiting.length}명)
      </Heading>
      <Box className='memberList'>
        {groupInfo.persons.waiting.map((item, index) => (
          <MemberListItem key={index} userInfo={item} groupId={groupInfo._id} />
        ))}
      </Box>
    </CardBox>
  );
};

export default GroupMemberWaitingContainer;
