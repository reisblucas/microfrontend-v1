import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

export interface Navlinks {
  href: string
  name: string
}

export function Navbar({ navlinks }: Navbar.Props) {
  if (!navlinks) return

  return (
    <div className={styles.navbarContainer}>
      {/* this comes from another module federation to populate our layout */}
      {navlinks.map((link) => (
        <nav key={link.name} className={styles.navlink}>
          <Link href={link.href}>{link.name}</Link>
        </nav>
      ))}
    </div>
  )
}

export namespace Navbar {
  export interface Props {
    navlinks?: Navlinks[]
  }
}
