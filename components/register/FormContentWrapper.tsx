import {Box} from '@chakra-ui/react';
import React from 'react';

const FormContentWrapper = (props: {
  children?: React.ReactNode;
  isEnabled: boolean;
}) => {
  return (
    <Box {...(props.isEnabled ? null : {display: 'none'})}>
      {props.children}
    </Box>
  );
};

export default FormContentWrapper;
