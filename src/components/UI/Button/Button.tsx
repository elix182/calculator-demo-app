import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string[],
  variant?: string,
  clicked?: () => void,
  style?: object
}

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
  const externalClasses = props.classes && props.classes.length? props.classes : [];
  const classes = [css.Button];
  if(!props.variant){
    classes.push(css.Default);
  } else {
    classes.push(css[props.variant.toLowerCase()]);
  }
  classes.push(...externalClasses);
  const className = classes.join(' ');
  const type = props.type || 'button';
  return <button className={className} style={props.style} type={type} onClick={props.clicked}>{props.children}</button>;
};
export default Button;