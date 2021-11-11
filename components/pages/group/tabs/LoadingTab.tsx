import {Center} from '@chakra-ui/layout';
import LoadingSpinner from 'components/common/LoadingSpinner';
import React from 'react';

const LoadingTab = () => {
  return (
    <Center paddingY='24px'>
      <LoadingSpinner />
    </Center>
  );
};

export default LoadingTab;
