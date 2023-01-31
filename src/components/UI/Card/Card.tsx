import React, { PropsWithChildren } from 'react';
import css from './Card.module.css';

interface CardProps {
  classes?: string[],
  style?: object
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const externalClasses = props.classes && props.classes.length? props.classes : [];
  const classes = [css.Card, ...externalClasses];
  const className = classes.join(' ');
  return <div className={className} style={props.style}>{props.children}</div>
};

export default Card;