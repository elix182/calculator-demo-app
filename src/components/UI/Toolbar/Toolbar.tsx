import React, { PropsWithChildren } from 'react';
import styles from './Toolbar.module.css';

interface ToolbarProps {
  style?: object
}

const Toolbar = (props: PropsWithChildren<ToolbarProps>) : JSX.Element => {
  return (
    <div className={styles.Toolbar} style={props.style}>
      {props.children}
    </div>
  )
}

export default Toolbar;