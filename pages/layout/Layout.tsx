import React from 'react';
import Header from './header/Header';
import Footer from './Footer';

const Layout = (props: { children?: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
