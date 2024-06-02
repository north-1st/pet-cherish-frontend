import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
