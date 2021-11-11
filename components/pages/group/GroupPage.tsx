import {Image, ImageProps} from '@chakra-ui/image';
import {Box, Center, Stack} from '@chakra-ui/layout';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs';
import CardBox from 'components/common/CardBox';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useUserInfo from 'hooks/api/useUserInfo';
import {useRouter} from 'next/dist/client/router';
import {useState} from 'react';
import {SpecificGroupInfo} from 'types/group';
import {isJoining} from 'utils/isJoining';
import GroupMemberContainer from './containers/GroupMemberContainer';
import GroupMemberWaitingContainer from './containers/GroupMemberWaitingContainer';
import PostContainer from './containers/PostContainer';
import HomeTab from './tabs/HomeTab';
import NotMemberTab from './tabs/NotMeberTab';
import PostTab from './tabs/PostTab';
import QuestTab from './tabs/QuestTab';

export const tabs = [
  {title: '홈', tab: HomeTab, path: 'home'},
  {title: '게시판', tab: PostTab, path: 'posts'},
  {title: '퀘스트', tab: QuestTab, path: 'quest'},
  {title: '채팅', tab: undefined, path: 'chatting'},
];

const GroupImage = (props: ImageProps) => {
  return (
    <Box height='360px' overflow='hidden'>
      <Image
        alt='groupImage'
        width='full'
        height='full'
        objectFit='cover'
        position='relative'
        {...props}
      />
    </Box>
  );
};

export const GroupTitle = (props: {groupTitle: string}) => {
  const {groupTitle} = props;

  return (
    <Center paddingY='18px' fontSize='20px' fontWeight='bold'>
      {groupTitle}
    </Center>
  );
};

export const GroupTabs = () => {
  return (
    <TabList fontWeight='semibold' height='48px'>
      {tabs.map((item, index) => (
        <Tab key={index} borderBottomWidth='1px'>
          {item.title}
        </Tab>
      ))}
    </TabList>
  );
};

const GroupPage = (props: {groupInfo: SpecificGroupInfo; tabIndex: number}) => {
  const {groupInfo} = props;
  const [tabIndex, setTabIndex] = useState(props.tabIndex);
  const {userInfo, isLoading} = useUserInfo();
  const router = useRouter();

  if (isLoading) {
    return (
      <Box className='groupPageContainer' marginTop='36px' marginBottom='80px'>
        <CardBox borderRadius='8pt' overflow='hidden'>
          <LoadingSpinner />
        </CardBox>
      </Box>
    );
  }

  return (
    <Stack
      className='groupPageContainer'
      spacing='16px'
      marginTop='36px'
      marginBottom='80px'
    >
      <CardBox borderRadius='8pt' overflow='hidden'>
        {tabIndex === 0 && <GroupImage src={groupInfo.imageUrls[0]} />}
        {tabIndex !== 0 && <GroupTitle groupTitle={groupInfo.name} />}
        <Tabs
          isFitted
          onChange={(index) => {
            setTabIndex(index);
            router.push(
              `/group/${groupInfo._id}/${tabs[index].path}`,
              undefined,
              {shallow: true}
            );
          }}
          defaultIndex={tabIndex}
        >
          <GroupTabs />
          <TabPanels>
            {tabs.map((item, index) =>
              item.tab ? (
                <TabPanel key={index} padding='0'>
                  {index !== 0 &&
                  userInfo &&
                  !isJoining(userInfo, groupInfo._id) ? (
                    <NotMemberTab groupInfo={groupInfo} />
                  ) : (
                    <item.tab key={index} groupInfo={groupInfo} />
                  )}
                </TabPanel>
              ) : null
            )}
          </TabPanels>
        </Tabs>
      </CardBox>
      {tabIndex === 0 && <GroupMemberContainer groupInfo={props.groupInfo} />}
      {tabIndex === 0 &&
        userInfo &&
        userInfo._id === groupInfo.persons.president._id && (
          <GroupMemberWaitingContainer groupInfo={props.groupInfo} />
        )}
      {tabIndex === 1 && userInfo && isJoining(userInfo, groupInfo._id) && (
        <PostContainer groupInfo={props.groupInfo} />
      )}
    </Stack>
  );
};

export default GroupPage;
