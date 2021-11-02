import {Box, Flex, HStack, Link, LinkProps} from '@chakra-ui/layout';
import Container from 'components/common/Container';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import React, {useEffect, useState} from 'react';
import {colors} from 'style';

const upperMenu = [
  {title: '공지사항', url: ''},
  {title: '자주 묻는 질문', url: ''},
];

const refresh = () => {
  window.location.reload();
};

const UpperNavigationMemberText = () => {
  const {userData} = useAuth();

  return (
    <Flex fontSize='12px' color={colors.mainGray[1]}>
      <Box fontWeight='bold'>{userData.name}</Box>님
    </Flex>
  );
};

const UpperNavigationButton = (props: LinkProps) => {
  return (
    <Link {...props} fontSize='12px' color={colors.mainGray[1]}>
      {props.children}
    </Link>
  );
};

const UpperNavigationBar = () => {
  const {logout, isLoggedIn} = useAuth();
  const {pageMoveWithRedirect} = usePageMove();
  const [isLoggedInState, setLoggedIn] = useState(false);
  const logoutAndRefresh = () => {
    logout();
    refresh();
  };

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Box
      className='upperNavigationBar'
      height='32px'
      backgroundColor={colors.panelGray}
    >
      <Container
        height='100%'
        display='flex'
        justifyContent='end'
        alignItems='center'
      >
        <HStack spacing='20px'>
          {isLoggedInState && (
            <React.Fragment>
              <UpperNavigationMemberText />
              <UpperNavigationButton onClick={logoutAndRefresh}>
                로그아웃
              </UpperNavigationButton>
            </React.Fragment>
          )}
          {!isLoggedInState && (
            <UpperNavigationButton
              onClick={() => {
                pageMoveWithRedirect('/login');
              }}
            >
              로그인
            </UpperNavigationButton>
          )}
          {upperMenu.map((item, index) => (
            <UpperNavigationButton key={index} href={item.url}>
              {item.title}
            </UpperNavigationButton>
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default UpperNavigationBar;
