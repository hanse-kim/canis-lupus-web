import {Image, ImageProps} from '@chakra-ui/image';
import {Box, Stack} from '@chakra-ui/layout';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs';
import CardBox from 'components/common/CardBox';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useUserInfo from 'hooks/api/useUserInfo';
import {useState} from 'react';
import {SpecificGroupInfo} from 'types/group';
import isJoining from 'utils/isJoin';
import GroupMemberContainer from './containers/GroupMemberContainer';
import PostContainer from './containers/PostContainer';
import HomeTab from './tabs/HomeTab';
import NotMemberTab from './tabs/NotMeberTab';
import PostTab from './tabs/PostTab';

const tabs = [
  {title: '홈', tab: HomeTab},
  {title: '게시판', tab: PostTab},
  {title: '퀘스트', tab: undefined},
  {title: '채팅', tab: undefined},
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

const GroupPage = (props: {groupInfo: SpecificGroupInfo}) => {
  const {groupInfo} = props;
  const [tabIndex, setTabIndex] = useState(0);
  const {userInfo, isLoading} = useUserInfo();

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
        <Tabs isFitted onChange={(index) => setTabIndex(index)}>
          <TabList fontWeight='semibold' height='48px'>
            {tabs.map((item, index) => (
              <Tab key={index} borderBottomWidth='1px'>
                {item.title}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabs.map((item, index) =>
              item.tab ? (
                <TabPanel key={index} padding='0'>
                  {index !== 0 &&
                  userInfo &&
                  !isJoining(userInfo, groupInfo._id) ? (
                    <NotMemberTab />
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
      {tabIndex === 1 && userInfo && isJoining(userInfo, groupInfo._id) && (
        <PostContainer groupInfo={props.groupInfo} />
      )}
    </Stack>
  );
};

export default GroupPage;
