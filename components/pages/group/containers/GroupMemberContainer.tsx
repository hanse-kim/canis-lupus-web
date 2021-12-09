import {Button} from '@chakra-ui/button';
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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/popover';
import CardBox from 'components/common/CardBox';
// import LoadingSpinner from 'components/common/LoadingSpinner';
import React from 'react';
import {colors} from 'style';
import {UserInfo} from 'types/auth';
import {SpecificGroupInfo} from 'types/group';

const MemberMorePop = (props: {
  groupInfo: SpecificGroupInfo;
  userInfo: UserInfo;
}) => {
  const {userInfo} = props;

  // if (isDeleting) {
  //   return <LoadingSpinner />;
  // }

  const banConfirm = () => {
    const result = confirm(
      `정말로 ${userInfo.name}님을 모임에서 추방하시겠습니까?`
    );
    if (result) {
      alert('추방되었습니다.');
    }
  };

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
          <Button
            onClick={banConfirm}
            variant='ghost'
            width='full'
            padding='0'
            margin='0'
            height='48px'
            color='#ff5847'
          >
            추방하기
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const MemberListItem = (props: {
  userInfo: UserInfo;
  groupInfo: SpecificGroupInfo;
  isGroupManager?: boolean;
}) => {
  const {userInfo, groupInfo, isGroupManager} = props;

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
        {!isGroupManager && (
          <Center>
            <MemberMorePop groupInfo={groupInfo} userInfo={userInfo} />
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
        <MemberListItem
          userInfo={groupInfo.persons.president}
          groupInfo={groupInfo}
          isGroupManager
        />
        {groupInfo.persons.members.map((item, index) => (
          <MemberListItem key={index} userInfo={item} groupInfo={groupInfo} />
        ))}
      </Box>
    </CardBox>
  );
};

export default GroupMemberContainer;
