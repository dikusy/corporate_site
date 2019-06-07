import React from 'react';
import './style.css';

interface Props {}

export const FooterComponent: React.SFC<Props> = (props) => {
  return (
    <nav className="footer-wrapper">
      <span>{ texts.footerTexts }</span>
    </nav>
  );
}

export const texts = {
  footerTexts: `@dikusy.com`
}
