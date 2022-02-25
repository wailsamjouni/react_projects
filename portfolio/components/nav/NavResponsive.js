import React from 'react'
import NavLink from './NavLink'
import {navData} from './navData'
import styles from '../../styles/nav/NavResponsive.module.scss'
import Link from 'next/link'

function NavResponsive(props) {
  return (
    <nav className={props.isOpen ? styles.active : styles.container}
      style={{right: props.isOpen ? "0px" : "-50vw"}}>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/about'>About</Link></li>
            <li><Link href='/skills'>Skills</Link></li>
            <li><Link href='/projects'>Projects</Link></li>
            <li><Link href='/portfolio'>Portfolio</Link></li>
        </ul>
    </nav>
  )
}

export default NavResponsive