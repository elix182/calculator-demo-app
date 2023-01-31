import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import CalculatorPanel from './CalculatorPanel/CalculatorPanel';
import Keyboard from '../../components/Keyboard/Keyboard';
import ICalculatorService from '../../services/ICalculatorService';
import CalculatorService from '../../services/CalculatorService';
import OperationType from '../../enum/OperationType';
import styles from './Calculator.module.css';

const service: ICalculatorService = new CalculatorService();

const Calculator = (): JSX.Element => {
  const [displayValue, setDisplayValue]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0.00);
  const [input, setInput]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0.00);
  const [prev, setPrev]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0.00);
  const [operation, setOperation] = useState(OperationType.NOT_SET);

  function onNumberClicked(value: number): void {
    const newInputString: string = input.toString().concat(value.toString());
    if(newInputString.length >= 12){
      return;
    }
    const newInput: number = parseInt(newInputString);
    setInput(newInput);
    setDisplayValue(newInput);
  }

  function onBackspaceClicked(): void {
    const newInputString: string = input.toString().slice(0, input.toString().length - 1);
    if(newInputString.length <= 0 || newInputString === '-'){
      setInput(0.00);
      setDisplayValue(0.00);
      return;
    }
    const newInput: number = parseInt(newInputString);
    setInput(newInput);
    setDisplayValue(newInput);
  }

  function onClearClicked(): void {
    setPrev(0.00)
    setInput(0.00);
    setDisplayValue(0.00);
    setOperation(OperationType.NOT_SET);
  }

  function onOperationClicked(op: OperationType): void {
    if(operation === OperationType.NOT_SET){
      if(op === OperationType.CHANGE_SIGN) {
        const value = displayValue? displayValue : input;
        const calculation = service.calculate(op, value, 0);
        setInput(calculation);
        setDisplayValue(calculation);
      } else {
        if(displayValue){
          setPrev(displayValue);
        } else {
          setPrev(input);
        }
        setInput(0.00);
        setOperation(op);
      }
    } else {
      const calculation = service.calculate(operation, prev, input);
      setPrev(displayValue);
      setInput(0.00);
      setDisplayValue(calculation);
      setOperation(op);
    }
  }

  function onEqualsClicked(): void {
    if(operation === OperationType.NOT_SET){
      return;
    }
    const calculation = service.calculate(operation, prev, input);
    setPrev(displayValue);
    setInput(0.00);
    setDisplayValue(calculation);
    setOperation(OperationType.NOT_SET);
  }

  return (
    <div className={styles.Calculator}>
      <Display value={displayValue} term1={prev} term2={input} operation={operation}></Display>
      <CalculatorPanel backspace={onBackspaceClicked} clear={onClearClicked} equals={onEqualsClicked} operation={onOperationClicked}>
        <Keyboard numberClicked={onNumberClicked}></Keyboard>
      </CalculatorPanel>
    </div>
  );
}

export default Calculator;