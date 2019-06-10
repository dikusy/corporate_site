import React, { Component } from 'react';
import styles from './style.module.css';

interface Props {}

interface State {}

export class screenComponent extends Component<Props, State> {
  public render() {
    return (
      <div className={styles.container}>
        portfolio
      </div>
    );
  }
}
