import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import SideBar from './SideBar';

function Header(props) {
    const {isOpen, setIsOpen} = props
  return (
  <div className='header'>
      <div className="header__logo">
          <a href="/">
          <img src="https://www.logo.wine/a/logo/Tesla%2C_Inc./Tesla%2C_Inc.-Wordmark-Black-Logo.wine.svg" alt="" />
          </a>
      </div>
      <div className="header__middle">
          <a href="">MODEL S</a>
          <a href="">MODEL 3</a>
          <a href="">MODEL X</a>
          <a href="">MODEL Y</a>
          <a href="">SOLAR ROOF</a>
          <a href="">SOLAR PANELS</a>
      </div>
      <div className="header__right">
          {isOpen && <SideBar />}
          <a href="" className={isOpen && 'hidden'}>SHOP</a>
          <a href="" className={isOpen && 'hidden'}>TESLA ACCOUNT</a>
          <div className="header__icons" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <AiOutlineClose className='close__icon' style={{zIndex: '10', marginLeft:"10px"}} size={20} /> 
              : <GiHamburgerMenu className='open__icon' size={20} style={{marginLeft:"10px"}}/>}
          </div>
      </div>
  </div>
  );
}

export default Header;
