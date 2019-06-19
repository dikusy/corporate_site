import React from 'react';
import styles from './style.module.css';

interface Props {
  text: string;
}

export const ButtonComponent: React.SFC <Props> = (props) => {
  return (
    <button className={styles.text}>{props.text}</button>
  );
}
