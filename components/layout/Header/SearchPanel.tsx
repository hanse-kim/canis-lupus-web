import {Box, Divider, Fade} from '@chakra-ui/react';
import React from 'react';
import SearchPanelContent from './SearchPanelContent';

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
        <SearchPanelContent />
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
