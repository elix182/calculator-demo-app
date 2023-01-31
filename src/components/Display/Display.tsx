import React from 'react'
import OperationType from '../../enum/OperationType';
import styles from './Display.module.css';

interface DisplayProps {
  value: number,
  term1: number,
  term2: number,
  operation: OperationType
}

const operationTypeSignSymbol: (op: OperationType) => string = (op: OperationType) => {
  if(op === OperationType.ADDITION){
    return '+';
  } else if(op === OperationType.SUBSTRACTION){
    return '-';
  } else if(op === OperationType.MULTIPLICATION){
    return '*';
  } else if(op === OperationType.DIVISION){
    return '/';
  }
  return 'Unknown';
}

const Display = (props: DisplayProps): JSX.Element => {
  const isRealNumber: boolean = Number.isFinite(props.value);
  const hasDecimals: boolean = !Number.isInteger(props.value);
  const value = isRealNumber && hasDecimals? props.value.toFixed(4) : props.value.toString();
  return <div className={styles.Display}>
    <div className={styles.Operation} style={{opacity: props.operation === OperationType.NOT_SET? 0.00 : 1.00 }}>
      {operationTypeSignSymbol(props.operation)}
    </div>
    <div className={styles.Value}>
      {value}
    </div>
  </div>;
}

export default Display;