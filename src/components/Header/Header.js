import React from 'react'

import styles from './Header.module.scss'
import logo from './Logo.svg'

const Header = () => (
  <header className={styles.header}>
    <img src={logo} alt="Лого в виде самолета" className={styles.logo}></img>
  </header>
)
export default Header
