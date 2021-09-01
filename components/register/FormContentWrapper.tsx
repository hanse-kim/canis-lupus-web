import {Stack} from '@chakra-ui/react';
import React from 'react';

const FormContentWrapper = (props: {children?: React.ReactNode}) => {
  return (
    <Stack className='formContentWrapper' spacing='6'>
      {props.children}
    </Stack>
  );
};

export default FormContentWrapper;
