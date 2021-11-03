import {Image} from '@chakra-ui/image';
import {Box, Flex, HStack, Link, Stack} from '@chakra-ui/layout';
import Container from 'components/common/Container';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import React from 'react';
import Logo from './Logo';
import SearchForm from './SearchForm';

const mainNavMenu = [
  {icon: 'icon_myGroups', title: '내 모임', onClick: () => {}},
  {icon: 'icon_notice', title: '알림', onClick: () => {}},
  {icon: 'icon_myPage', title: '마이페이지', onClick: () => {}},
];

const MainNavigationIconButton = (props: {
  icon: string;
  title: string;
  onClick: () => void;
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
  const {isLoggedIn} = useAuth();
  const {pageMove} = usePageMove();

  return (
    <Container className='mainNavigationBar' paddingY='14px'>
      <Flex justifyContent='space-between'>
        <Logo width='122px' />
        <HStack spacing='24px'>
          <SearchForm {...props} />
          {mainNavMenu.map((item, index) => (
            <MainNavigationIconButton
              key={index}
              icon={item.icon}
              title={item.title}
              onClick={
                isLoggedIn ?
                  item.onClick :
                  () => {
                      pageMove('/register');
                    }
              }
            />
          ))}
        </HStack>
      </Flex>
    </Container>
  );
};

export default MainNavigationBar;
