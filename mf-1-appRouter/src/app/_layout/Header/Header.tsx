import React from 'react'
import styles from './header.module.css'

export function Header() {
  return (
    <div className={styles.headerContainer}>
      {/* this comes from another module federation to populate our layout */}
      Header
    </div>
  )
}
