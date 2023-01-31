import React, { PropsWithChildren } from 'react';
import OperationKeyButton from './OperationKeyButton/OperationKeyButton';
import styles from './CalculatorPanel.module.css';
import OperationType from '../../../enum/OperationType';

interface CalculatorPanelProps {
  backspace: () => void,
  clear: () => void, 
  equals: () => void,
  operation: (op: OperationType) => void
}

const CalculatorPanel = (props: PropsWithChildren<CalculatorPanelProps>): JSX.Element => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '8pt'}}>
      <div style={{display: 'flex', flexDirection: 'row', gap: '8pt'}}>
        <OperationKeyButton label='AC' clicked={props.clear}></OperationKeyButton>
        <OperationKeyButton label='&#177;' clicked={() => props.operation(OperationType.CHANGE_SIGN)}></OperationKeyButton>
        <OperationKeyButton label='&larr;' clicked={props.backspace} classes={[styles.BackspaceKey]}></OperationKeyButton>
        <OperationKeyButton label='&#43;' clicked={() => props.operation(OperationType.ADDITION)}></OperationKeyButton>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end', justifyContent: 'center', gap: '8pt'}}>
        {props.children}
        <div style={{display: 'flex', flexDirection: 'column', gap: '8pt'}}>
          <OperationKeyButton label='&minus;' clicked={() => props.operation(OperationType.SUBSTRACTION)}></OperationKeyButton>
          <OperationKeyButton label='&#215;' clicked={() => props.operation(OperationType.MULTIPLICATION)}></OperationKeyButton>
          <OperationKeyButton label='&#247;' clicked={() => props.operation(OperationType.DIVISION)}></OperationKeyButton>
          <OperationKeyButton label='&#61;' clicked={props.equals} classes={[styles.EqualsKey]}></OperationKeyButton>
        </div>
      </div>
    </div>
  );
};

export default CalculatorPanel