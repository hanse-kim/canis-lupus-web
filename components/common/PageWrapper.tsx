import {BoxProps} from '@chakra-ui/layout';
import React from 'react';
import Container from './Container';

const styles = {
  minHeight: 'container.sm',
};

const PageWrapper = (props: BoxProps) => {
  return (
    <Container className='pageWrapper' {...props} {...styles}>
      {props.children}
    </Container>
  );
};

export default PageWrapper;
