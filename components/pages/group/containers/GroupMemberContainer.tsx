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
import React from 'react';
import {colors} from 'style';
import {UserInfo} from 'types/auth';
import {SpecificGroupInfo} from 'types/group';

const MemberListItem = (props: {
  userInfo: UserInfo;
  isGroupManager?: boolean;
}) => {
  const {userInfo, isGroupManager} = props;

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
        {isGroupManager && (
          <Center color={colors.mainBlue[1]} fontSize='16px' fontWeight='bold'>
            개설자
          </Center>
        )}
      </Flex>
      <Divider borderColor='#eee' />
    </Box>
  );
};

const GroupMemberContainer = (props: {groupInfo: SpecificGroupInfo}) => {
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
        모임 멤버 ({groupInfo.personsCount}/{groupInfo.maxPerson}명)
      </Heading>
      <Box className='memberList'>
        <MemberListItem userInfo={groupInfo.persons.president} isGroupManager />
        {groupInfo.persons.members.map((item, index) => (
          <MemberListItem key={index} userInfo={item} />
        ))}
      </Box>
    </CardBox>
  );
};

export default GroupMemberContainer;
