import {ChevronRightIcon} from '@chakra-ui/icons';
import {Image} from '@chakra-ui/image';
import {
  Box,
  BoxProps,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
} from '@chakra-ui/layout';
import CardBox from 'components/common/CardBox';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useUserInfo from 'hooks/api/useUserInfo';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';

const moreMenu = [
  {title: '공지사항', url: '/notice'},
  {title: '고객센터', url: '/faq'},
  {title: '이용약관', url: '/terms/termsOfUse'},
  {title: '개인정보취급방침', url: '/terms/privacyPolicy'},
  {title: '로그아웃'},
];

const CardHeading = (props: BoxProps) => {
  return (
    <Box fontWeight='bold' fontSize='16px' marginBottom='12px' {...props}>
      {props.children}
    </Box>
  );
};

const ProfileCard = () => {
  const {userData} = useAuth();
  const {userInfo, isLoading} = useUserInfo();

  if (isLoading) {
    return (
      <CardBox
        className='profileCard'
        flex='1'
        padding='16px'
        height='full'
        alignItems='center'
      >
        <LoadingSpinner />
      </CardBox>
    );
  }

  return (
    <CardBox className='profileCard' flex='1' padding='16px' height='full'>
      <CardHeading>{`${userData.name}님의 프로필`}</CardHeading>
      <HStack spacing='12px' alignItems='flex-start'>
        <Image
          src={userInfo?.imageUrl}
          width='80px'
          height='80px'
          alt='profileImage'
          objectFit='cover'
          borderRadius='full'
        />
        <Stack spacing='4px' flex={1}>
          <Box fontSize='18px' fontWeight='bold'>
            {userData.name}
          </Box>
          <Box fontSize='12px' color='#666'>
            {userInfo?.introduce}
          </Box>
        </Stack>
      </HStack>
    </CardBox>
  );
};

const QuestCard = () => {
  const completed = 0;
  const inProgress = 0;
  const failed = 0;

  return (
    <CardBox
      className='questCard'
      flex='1'
      padding='16px'
      height='full'
      position='relative'
    >
      <CardHeading>나의 퀘스트</CardHeading>
      <HStack marginBottom='64px'>
        <QuestCount label='완료한 퀘스트' count={completed} />
        <QuestCount label='진행중 퀘스트' count={inProgress} />
        <QuestCount label='실패한 퀘스트' count={failed} />
      </HStack>
    </CardBox>
  );
};

const QuestCount = (props: {label: string; count: number}) => {
  return (
    <Stack spacing='4px' alignItems='center' flex='1'>
      <Box color='#666' fontSize='48px' fontWeight='bold'>
        {props.count}
      </Box>
      <Box>{props.label}</Box>
    </Stack>
  );
};

const MoreMenuCard = () => {
  const {pageMove, pageRedirect} = usePageMove();
  const {logout} = useAuth();
  const onMoreMenuClick = (moreMenuItem: { title: string; url?: string }) => {
    console.log('!!');
    if (moreMenuItem.url) {
      pageMove(moreMenuItem.url);
    } else if (moreMenuItem.title === '로그아웃') {
      logout();
      pageRedirect('/main');
    }
  };

  return (
    <CardBox padding='16px'>
      <CardHeading>더보기</CardHeading>
      <Box>
        {moreMenu.map((item, index) => {
          return (
            <MoreMenuItem
              key={index}
              title={item.title}
              onClick={() => {
                onMoreMenuClick(item);
              }}
            />
          );
        })}
      </Box>
    </CardBox>
  );
};

const MoreMenuItem = (props: {
  title: string;
  url?: string;
  onClick?: () => void;
}) => {
  return (
    <Link onClick={props.onClick}>
      <Flex justifyContent='space-between' alignItems='center' paddingY='14px'>
        <Box>{props.title}</Box>
        <ChevronRightIcon width='20px' height='20px' />
      </Flex>
      <Divider orientation='horizontal' />
    </Link>
  );
};

const MyPageContainer = () => {
  return (
    <Stack spacing='24px' paddingTop='36px' paddingBottom='80px'>
      <Heading textAlign='center' fontSize='26px'>
        마이페이지
      </Heading>
      <Stack spacing='16px'>
        <HStack spacing='16px' height='240px'>
          <ProfileCard />
          <QuestCard />
        </HStack>
        <MoreMenuCard />
      </Stack>
    </Stack>
  );
};

export default MyPageContainer;
