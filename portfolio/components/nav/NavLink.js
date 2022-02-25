import React from 'react'
import Link from 'next/link'
import styles from '../../styles/NavBar.module.scss'


function NavLink({currentPath, path, name}) {
  return (
    <li className={currentPath === path ? styles.active : styles.inactive}>
        <Link href={path}>
            <a>{name}</a>
        </Link>
    </li>
  )
}

export default NavLink