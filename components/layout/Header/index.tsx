import React from 'react';
import {Box, Divider} from '@chakra-ui/react';
import SearchPanel from './SearchPanel';
import UpperNavigationBar from './UpperNavigationBar';
import MainNavigationBar from './MainNavigationBar';
import useSearchPanel from 'hooks/search/useSearchPanel';
import {colors} from 'style';

const Header = () => {
  const {isOpen, onOpen, onClose} = useSearchPanel();

  return (
    <header>
      <Box className='headerWrapper' backgroundColor={colors.white}>
        <UpperNavigationBar />
        <MainNavigationBar onOpen={onOpen} onClose={onClose} />
      </Box>
      <Divider />
      <SearchPanel isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </header>
  );
};

export default Header;
