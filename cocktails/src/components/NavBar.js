import React from 'react'
import './NavBar.css'

function NavBar() {
    return (
        <nav className='nav'>
            <div className='nav__wrapper'>
                <a href='/'>
                    <h2 className='nav__logo'>Cocktail <span className='nav__span'>Bar.</span></h2>
                </a>
                <ul className='nav__list'>
                    <li className="nav__links">
                        <a href='/'>
                            <h4 className="nav__item">Home</h4>
                        </a>
                    </li>
                    <li className="nav__links">
                        <a href='/about'>
                            <h4 className="nav__item">About</h4>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar