import React from 'react'
import Toolbar from '../../components/UI/Toolbar/Toolbar';
import logo from '../../logo.svg';
import styles from './Header.module.css';

const Header = (): JSX.Element => {
  return (
    <header className={styles.AppHeader}>
      <Toolbar style={{height: '50pt'}}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <h3>Calculator</h3>
      </Toolbar>
    </header>
  );
}

export default Header;