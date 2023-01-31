import OperationType from "../enum/OperationType";
import ICalculatorService  from "./ICalculatorService";

export default class CalculatorService implements ICalculatorService {
  public calculate(op: OperationType, a: number, b: number): number {
    if(op === OperationType.ADDITION){
      return this.addition(a, b);
    } else if(op === OperationType.SUBSTRACTION){
      return this.substraction(a, b);
    } else if(op === OperationType.MULTIPLICATION){
      return this.multiplication(a, b);
    } else if(op === OperationType.DIVISION){
      return this.division(a, b);
    } else if(op === OperationType.CHANGE_SIGN){
      return this.changeSign(a);
    }
    return 0;
  }

  private addition(a: number, b: number): number {
    return a + b;
  }

  private substraction(a: number, b: number): number {
    return a - b;
  }
  private multiplication(a: number, b: number): number {
    return a * b;
  }
  private division(a: number, b: number): number {
    return a / b;
  }
  private changeSign(a: number): number {
    return a * -1;
  }
}