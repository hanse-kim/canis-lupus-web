import {Box, Divider, Fade} from '@chakra-ui/react';
import Container from 'components/common/Container';
import React from 'react';

const SearchPanel = (props: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  const {isOpen, onClose} = props;

  return (
    <Fade
      in={isOpen}
      className='searchPanel'
      style={{
        position: 'relative',
        ...(!isOpen && {display: 'none'}),
        zIndex: 1300,
      }}
    >
      <Box
        position='absolute'
        top='0'
        width='full'
        bgColor='white'
        zIndex='modal'
        boxShadow='lg'
      >
        <Container maxWidth='container.md'>
          This is search panel content.
        </Container>
        <Divider />
      </Box>
      <Box
        className='overlay'
        position='absolute'
        top='0'
        width='full'
        height='9999px'
        bgColor='black'
        opacity='0.5'
        zIndex='overlay'
        onClick={onClose}
      />
    </Fade>
  );
};

export default SearchPanel;
