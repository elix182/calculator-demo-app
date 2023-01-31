import OperationType from "../enum/OperationType";

export default interface ICalculatorService {
  calculate: (op: OperationType, a: number, b: number) => number,
}