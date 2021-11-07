import {Image} from '@chakra-ui/image';
import {Box, Flex, HStack, Link, Stack} from '@chakra-ui/layout';
import Container from 'components/common/Container';
import usePageMove from 'hooks/usePageMove';
import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';
import NotificationButton from './Notification';

const mainNavMenu = [
  {
    icon: 'icon_myGroups',
    title: '내 모임',
    url: '/mygroups',
  },
  {icon: 'icon_notice', title: '알림', onClick: () => {}},
  {icon: 'icon_myPage', title: '마이페이지', url: '/mypage'},
];

export const MainNavigationIconButton = (props: {
  icon: string;
  title: string;
  onClick?: () => void;
}) => {
  return (
    <Link onClick={props.onClick} color='#aaa'>
      <Stack spacing='0' alignItems='center'>
        <Image
          src={`/icons/${props.icon}.svg`}
          alt={props.title}
          width='20px'
          height='20px'
        />
        <Box fontSize='10px'>{props.title}</Box>
      </Stack>
    </Link>
  );
};

const MainNavigationBar = (props: {
  onOpen: () => void;
  onClose: () => void;
}) => {
  const {pageMove} = usePageMove();

  const onMainNavMenuClick = (mainNavMemuItem: {
    icon: string;
    title: string;
    onClick?: () => void;
    url?: string;
  }) => {
    if (mainNavMemuItem.onClick) {
      mainNavMemuItem.onClick();
    } else if (mainNavMemuItem.url) {
      pageMove(mainNavMemuItem.url);
    }
  };

  return (
    <Container className='mainNavigationBar' paddingY='14px'>
      <Flex justifyContent='space-between'>
        <Logo width='122px' />
        <HStack spacing='24px'>
          <SearchForm {...props} />
          <MainNavigationIconButton
            icon={mainNavMenu[0].icon}
            title={mainNavMenu[0].title}
            onClick={() => {
              onMainNavMenuClick(mainNavMenu[0]);
            }}
          />
          <NotificationButton />
          <MainNavigationIconButton
            icon={mainNavMenu[2].icon}
            title={mainNavMenu[2].title}
            onClick={() => {
              onMainNavMenuClick(mainNavMenu[2]);
            }}
          />
        </HStack>
      </Flex>
    </Container>
  );
};

export default MainNavigationBar;
