import {Flex} from '@chakra-ui/react';
import React from 'react';

const FormContentWrapper = (props: {children?: React.ReactNode}) => {
  return (
    <Flex flexDirection='column' className='formContentWrapper'>
      {props.children}
    </Flex>
  );
};

export default FormContentWrapper;
