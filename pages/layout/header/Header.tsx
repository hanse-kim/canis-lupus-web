import React from 'react';
import {
  Container,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import SearchProductForm from './SearchProductForm';
import NavContainer from './NavContainer';
import SearchPanel from './SearchPanel';
import Logo from './Logo';


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
      <Container
        className="headerWrapper"
        display="flex"
        maxWidth="container.lg"
        marginY="6"
      >
        <Logo />
        <SearchProductForm onOpen={onOpenSearchPanel} />
        <NavContainer />
      </Container>
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
