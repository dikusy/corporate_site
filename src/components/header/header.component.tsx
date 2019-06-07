import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { HashLink } from 'react-router-hash-link';


interface Props {}

export const HeaderComponent: React.SFC<Props> = (props) => {
  return (
    <nav className="header-container">
      <ul className="item-view">
        <li>
          <HashLink className="item-text" to="/"><img src="./images/dikusy_w_logo.png" alt="logo" width="auto" height="64px" /></HashLink>
        </li>
        <li>
          <HashLink className="item-text" to="#portfolio" smooth>{ texts.portfolio }</HashLink>
        </li>
        <li>
          <HashLink className="item-text" to="#team" smooth>{ texts.team }</HashLink>
        </li>
        <li>
          <Link className="item-text" to="/contact">{ texts.contact }</Link>
        </li>
      </ul>
    </nav>
  );
}

export const texts = {
  team: `Team`,
  portfolio: `Portfolio`,
  contact: `Contact`,
}
