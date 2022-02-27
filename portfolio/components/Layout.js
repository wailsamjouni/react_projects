import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Footer from './Footer';
import NavBar from './NavBar';

function Layout({children}) {

    // const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
         {/* <NavBar isOpen={isOpen} setIsOpen={setIsOpen}/> */}
        <NavBar/>
        {children}
        <Footer />
    </div>
  );
}

export default Layout;

