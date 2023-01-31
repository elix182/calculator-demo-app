import React from 'react'
import KeyboardButton from './KeyboardButton/KeyboardButton';
import styles from './Keyboard.module.css';

interface KeyboardProps {
  numberClicked: (value: number) => void,
}

const Keyboard = (props: KeyboardProps): JSX.Element => {
  return (
    <div className={styles.Keyboard}>
      <div className={styles.Row}>
        <KeyboardButton value={7} clicked={props.numberClicked}></KeyboardButton>
        <KeyboardButton value={8} clicked={props.numberClicked}></KeyboardButton>
        <KeyboardButton value={9} clicked={props.numberClicked}></KeyboardButton>
      </div>
      <div className={styles.Row}>
        <KeyboardButton value={4} clicked={props.numberClicked}></KeyboardButton>
        <KeyboardButton value={5} clicked={props.numberClicked}></KeyboardButton>
        <KeyboardButton value={6} clicked={props.numberClicked}></KeyboardButton>  
      </div>
      <div className={styles.Row}>
        <KeyboardButton value={1} clicked={props.numberClicked}></KeyboardButton>
        <KeyboardButton value={2} clicked={props.numberClicked}></KeyboardButton>
        <KeyboardButton value={3} clicked={props.numberClicked}></KeyboardButton>
      </div>
      <div className={[styles.Row, styles.Center].join(' ')}>
        <KeyboardButton value={0} clicked={props.numberClicked}></KeyboardButton>
      </div>
    </div>
  );
}

export default Keyboard;