import React from 'react'
import styles from './footer.module.css'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      {/* this comes from another module federation to populate our layout */}
      <p>
        Copyright © 2023 -
        <span>
          <a href="https://github.com/reisblucas" rel="noopener" target="_blank">
            @reisblucas
          </a>
        </span>
        <br />
        All rights reserved.
      </p>
    </div>
  )
}
