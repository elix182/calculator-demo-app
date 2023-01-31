import React from 'react'
import Button from '../../../../components/UI/Button/Button';
import styles from './OperationKeyButton.module.css';

interface OperationKeyButtonProps {
  label: string,
  clicked: () => void,
  classes?: string[]
}

const OperationKeyButton = (props: OperationKeyButtonProps): JSX.Element => {
  const externalClasses = props.classes && props.classes.length? props.classes : [];
  return (
    <Button classes={[styles.OperationKeyButton, ...externalClasses]} type='button' clicked={props.clicked}>
      {props.label}
    </Button>
  );
}

export default OperationKeyButton;