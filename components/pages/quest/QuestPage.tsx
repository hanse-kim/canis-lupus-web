import {Box, Divider, Heading, HStack, Stack} from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image';
import {Tabs} from '@chakra-ui/react';
import CardBox from 'components/common/CardBox';
import React from 'react';
import usePageMove from 'hooks/usePageMove';
import {GroupTabs, GroupTitle} from '../group/GroupPage';
import {QuestInfo} from 'types/quest';
import {UserInfo} from 'types/auth';

const tabsPath = ['main', 'posts', 'quest', 'chatting'];

const User = (props: {userInfo: UserInfo}) => {
  const {userInfo} = props;

  return (
    <Box>
      <HStack spacing='12px' alignItems='center' paddingY='10px'>
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
        </Stack>{' '}
      </HStack>
      <Divider />
    </Box>
  );
};

const UserContainer = (props: {users: UserInfo[]}) => {
  return (
    <Box marginTop='18px'>
      {props.users.map((item, index) => {
        return <User key={index} userInfo={item} />;
      })}
    </Box>
  );
};

const QuestCardHeader = (props: {questInfo: QuestInfo}) => {
  const {questInfo} = props;
  return (
    <Stack spacing='8px'>
      <Heading fontSize='24px'>{questInfo.title}</Heading>
      <Box color='#666'>{questInfo.contents}</Box>
    </Stack>
  );
};

const QuestCardContent = (props: {questInfo: QuestInfo}) => {
  const {questInfo} = props;

  return (
    <Stack spacing='48px'>
      <Box>
        <Heading fontSize='16px'>
          도전중인 사람 {questInfo.users.ongoing.length}명
        </Heading>
        <UserContainer users={questInfo.users.ongoing} />
      </Box>
      <Box>
        <Heading fontSize='16px'>
          성공한 사람 {questInfo.users.completion.length}명
        </Heading>
        <UserContainer users={questInfo.users.completion} />
      </Box>
    </Stack>
  );
};

const QuestPageTab = (props: {questInfo: QuestInfo}) => {
  const {questInfo} = props;

  return (
    <Box paddingX='16px' paddingY='24px'>
      <Stack spacing='20px'>
        <QuestCardHeader questInfo={questInfo} />
        <QuestCardContent questInfo={questInfo} />
      </Stack>
    </Box>
  );
};

const QuestPage = (props: {questInfo: QuestInfo}) => {
  const {questInfo} = props;
  const groupInfo = questInfo.meeting;
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
          defaultIndex={2}
          onChange={(index) => {
            pageMove(`/group/${groupInfo._id}/${tabsPath[index]}`);
          }}
        >
          <GroupTabs />
        </Tabs>
        <QuestPageTab questInfo={questInfo} />
      </CardBox>
    </Stack>
  );
};

export default QuestPage;
