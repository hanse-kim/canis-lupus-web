import {Box, BoxProps} from '@chakra-ui/react';
import React from 'react';

const CardBox = (props: BoxProps) => {
  return (
    <Box boxShadow='0 0 30px 0 rgba(141, 151, 158, 0.2)' {...props}>
      {props.children}
    </Box>
  );
};

export default CardBox;
