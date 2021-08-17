import {Center, Divider, Link} from '@chakra-ui/react';
import useLogin from 'hooks/useLogin';
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

const GuestNav = () => {
  const {pageMoveWithRedirect} = usePageMove();

  return (
    <TextButton
      onClick={() => {
        pageMoveWithRedirect('/login');
      }}
    >
      로그인
    </TextButton>
  );
};

const MemberNav = () => {
  const {logout} = useLogin();

  const logoutAndRefresh = () => {
    logout({});
    refresh();
  };

  return (
    <Center height='21px'>
      <TextButton href='/mygroups'>내 모임</TextButton>
      <Divider orientation='vertical' />
      <TextButton href='/mypage'>마이페이지</TextButton>
      <Divider orientation='vertical' />
      <TextButton onClick={logoutAndRefresh}>로그아웃</TextButton>
    </Center>
  );
};

const NavContainer = () => {
  const [isLogin, setLogin] = useState(false);
  const {isLoggedIn} = useLogin();

  useEffect(() => {
    setLogin(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Center className='navContainer' marginLeft='auto'>
      {isLogin ? <MemberNav /> : <GuestNav />}
    </Center>
  );
};

export default NavContainer;
