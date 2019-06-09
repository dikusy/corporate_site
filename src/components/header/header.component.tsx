import React from 'react';
import './style.css';
import { HashLink } from 'react-router-hash-link';


interface Props {}

export const HeaderComponent: React.SFC<Props> = (props) => {
  return (
    <nav className="header-container">
      <ul className="item-view">
        <li>
          <HashLink className="item-text" to="/">
            <img src="./images/dikusy_w_logo.png" alt="logo" width="auto" height="64px" />
          </HashLink>
        </li>
        <li>
          <HashLink className="item-text" to="#portfolio" smooth>{ texts.portfolio }</HashLink>
        </li>
        <li>
          <HashLink className="item-text" to="#team" smooth>{ texts.team }</HashLink>
        </li>
        <li>
          <HashLink className="item-text" to="#company" smooth>{ texts.company }</HashLink>
        </li>
        <li>
          <HashLink className="item-text" to="#contact" smooth>{ texts.contact }</HashLink>
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
