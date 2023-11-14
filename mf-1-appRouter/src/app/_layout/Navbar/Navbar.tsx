import React from 'react'
import styles from './navbar.module.css'

const navArr = ['Home', 'Profile', 'About']

export function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      {/* this comes from another module federation to populate our layout */}
      {navArr.map((link) => (
        <nav key={link} className={styles.navlink}>
          {link}
        </nav>
      ))}
    </div>
  )
}
