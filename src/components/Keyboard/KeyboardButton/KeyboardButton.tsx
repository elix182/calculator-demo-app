import React from 'react'
import Button from '../../UI/Button/Button';
import styles from './KeyboardButton.module.css';

interface KeyboardButtonProps {
  value: number,
  clicked: (value: number) => void
}

const KeyboardButton = (props: KeyboardButtonProps): JSX.Element => {
  return (
    <Button classes={[styles.KeyboardButton]} type='button' clicked={() => props.clicked(props.value)}>
      {props.value}
    </Button>
  );
}

export default KeyboardButton;