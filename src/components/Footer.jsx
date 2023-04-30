import React from 'react'
import styles from '../css/navigation.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.copyright}>&copy; Folake &amp; Oluwole 2023</p>
        <p className={styles.creator}><a href="http://abecodes.com">Created by: <span className={styles.portfolioLink}>abecodes.com</span></a></p>
    </footer>
  )
}

export default Footer