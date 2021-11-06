import {Image, ImageProps} from '@chakra-ui/image';
import {Stack} from '@chakra-ui/layout';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/tabs';
import CardBox from 'components/common/CardBox';
import {useState} from 'react';
import {SpecificGroupInfo} from 'types/group';
import GroupMemberContainer from './GroupMemberContainer';
import HomeTab from './tabs/HomeTab';

const tabs = [
  {title: '홈', tab: HomeTab},
  {title: '게시판', tab: undefined},
  {title: '퀘스트', tab: undefined},
  {title: '채팅', tab: undefined},
];

const GroupImage = (props: ImageProps) => {
  return (
    <Image
      alt='groupImage'
      width='full'
      height='360px'
      objectFit='cover'
      {...props}
    />
  );
};

const GroupPage = (props: {groupInfo: SpecificGroupInfo}) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Stack
      className='groupPageContainer'
      spacing='16px'
      marginTop='36px'
      marginBottom='80px'
    >
      <CardBox borderRadius='8pt' overflow='hidden'>
        <GroupImage src={props.groupInfo.imageUrls[0]} />
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
                  <item.tab key={index} groupInfo={props.groupInfo} />
                </TabPanel>
              ) : null
            )}
          </TabPanels>
        </Tabs>
      </CardBox>
      {tabIndex === 0 && <GroupMemberContainer groupInfo={props.groupInfo} />}
    </Stack>
  );
};

export default GroupPage;
