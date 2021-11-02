import React from 'react';
import {Box, Divider, useDisclosure} from '@chakra-ui/react';
import SearchPanel from './SearchPanel';
import UpperNavigationBar from './UpperNavigationBar';
import MainNavigationBar from './MainNavigationBar';

const Header = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const onOpenSearchPanel = () => {
    onOpen();
    document.documentElement.style.overflow = 'hidden';
  };

  const onCloseSearchPanel = () => {
    onClose();
    document.documentElement.style.overflow = '';
  };

  return (
    <header>
      <Box className='headerWrapper'>
        <UpperNavigationBar />
        <MainNavigationBar
          onOpen={onOpenSearchPanel}
          onClose={onCloseSearchPanel}
        />
      </Box>
      <Divider />
      <SearchPanel
        isOpen={isOpen}
        onOpen={onOpenSearchPanel}
        onClose={onCloseSearchPanel}
      />
    </header>
  );
};

export default Header;
