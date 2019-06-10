import React from 'react';
import styles from './style.module.css';
import { HashLink } from 'react-router-hash-link';


interface Props {}

export const HeaderComponent: React.SFC<Props> = (props) => {
  return (
    <nav className={styles.container}>
      <ul className={styles.item_view}>
        <li>
          <HashLink className={styles.item_text} to="/">
            <img src="./images/dikusy_w_logo.png" alt="logo" width="auto" height="64px" />
          </HashLink>
        </li>
        <li>
          <HashLink className={styles.item_text} to="#portfolio" smooth>{ texts.portfolio }</HashLink>
        </li>
        <li>
          <HashLink className={styles.item_text} to="#team" smooth>{ texts.team }</HashLink>
        </li>
        <li>
          <HashLink className={styles.item_text} to="#company" smooth>{ texts.company }</HashLink>
        </li>
        <li>
          <HashLink className={styles.item_text} to="#contact" smooth>{ texts.contact }</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export const texts = {
  team: `Team`,
  portfolio: `Portfolio`,
  company: `Company`,
  contact: `Contact`,
}
