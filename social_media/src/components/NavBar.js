import React from 'react'
import './NavBar.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillPersonFill, BsFillChatDotsFill } from 'react-icons/bs';
import { IoMdNotifications  } from 'react-icons/io';


function NavBar() {
  return (
    <nav>
        <div className='container'>
            <div className="container__logo">
                <span>WS</span>
            </div>
            <div className="container__midlle">
                <div className="search">
                    <input type="text" placeholder='Search friends'/>
                    <AiOutlineSearch size={'2rem'} className='searchicon'/>
                </div>
            </div>
            <div className="container__right">
                <div className='links'>
                    <span>Homepage</span>
                    <span>Timeline</span>
                </div>
                <div className="iconscontainer">
                    <div className='icons'>
                        <BsFillPersonFill size={'1.5rem'} className='icon'/>
                        <span>5</span>
                    </div>
                    <div className='icons'>
                        <BsFillChatDotsFill size={'1.5rem'} className='icon'/>
                        <span>3</span>
                    </div>
                    <div className='icons'>
                        <IoMdNotifications size={'1.5rem'} className='icon'/>
                        <span>6</span>
                    </div>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>
    </nav>
  )
}

export default NavBar