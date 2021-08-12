import React from 'react';
import {Container} from '@chakra-ui/layout';

const styles = {
  maxWidth: 'container.lg',
  minHeight: '',
};

const PageWrapper = (props: { children?: React.ReactNode }) => {
  return (
    <Container {...styles} minHeight='container.sm' className="pageWrapper">
      {props.children}
    </Container>
  );
};

export default PageWrapper;
