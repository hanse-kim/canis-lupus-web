import {Center, Divider, Link, Flex} from '@chakra-ui/react';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import React, {useEffect, useState} from 'react';

const refresh = () => {
  window.location.reload();
};

const TextButton = (props: {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}) => {
  return (
    <Link onClick={props.onClick} href={props.href} fontSize='sm' marginX='1.5'>
      {props.children}
    </Link>
  );
};

const UserNavContainer = (props: {children?: React.ReactNode}) => {
  return (
    <Flex height='21px' minWidth='36' justifyContent='flex-end'>
      {props.children}
    </Flex>
  );
};

const GuestNav = () => {
  const {pageMoveWithRedirect} = usePageMove();

  return (
    <UserNavContainer>
      <TextButton
        onClick={() => {
          pageMoveWithRedirect('/login');
        }}
      >
        로그인
      </TextButton>
    </UserNavContainer>
  );
};

const MemberNav = () => {
  const {logout} = useAuth();
  const logoutAndRefresh = () => {
    logout();
    refresh();
  };

  return (
    <UserNavContainer>
      <TextButton href='/mygroups'>내 모임</TextButton>
      <Divider orientation='vertical' />
      <TextButton href='/mypage'>마이페이지</TextButton>
      <Divider orientation='vertical' />
      <TextButton onClick={logoutAndRefresh}>로그아웃</TextButton>
    </UserNavContainer>
  );
};

const NavContainer = () => {
  const {isLoggedIn: authIsLoggedIn} = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(authIsLoggedIn);
  }, [authIsLoggedIn]);

  return (
    <Center className='navContainer' marginLeft='auto'>
      {isLoggedIn ? <MemberNav /> : <GuestNav />}
    </Center>
  );
};

export default NavContainer;
