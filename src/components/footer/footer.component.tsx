import React from 'react';
import styles from './style.module.css';

interface Props {}

export const FooterComponent: React.SFC<Props> = (props) => {
  return (
    <nav className={styles.container}>
      <span>{ texts.footerTexts }</span>
    </nav>
  );
}

export const texts = {
  footerTexts: `@dikusy.com`
}
