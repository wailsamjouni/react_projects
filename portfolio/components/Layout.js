import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

function Layout({children}) {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        {children}
        <Footer />
    </div>
  );
}

export default Layout;

