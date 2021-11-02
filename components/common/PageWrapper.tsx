import React from 'react';
import Container from './Container';

const styles = {
  minHeight: 'container.sm',
};

const PageWrapper = (props: { children?: React.ReactNode }) => {
  return (
    <Container {...styles} className='pageWrapper'>
      {props.children}
    </Container>
  );
};

export default PageWrapper;
