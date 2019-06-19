import React from 'react';
import styles from './style.module.css';
import { Portfolio } from '../../home/screen.component';

interface Props {
  portfolio: Portfolio;
}

export const CardComponent: React.SFC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <img src={ props.portfolio.image } alt="card_image" width="100%" />
      <h4 className={styles.title}>{ props.portfolio.title }</h4>
      <p className={styles.text}>{ props.portfolio.body }</p>
      <button className={styles.btn}>more</button>
    </div>
  );
}
