import React from 'react';
import './style.css';
import { Portfolio } from '../../home/screen.component';

interface Props {
  portfolio: Portfolio;
}

export const CardComponent: React.SFC<Props> = (props) => {
  return (
    <div className="card-content-wrapper">
      <img src={ props.portfolio.image } alt="card_image" width="100%" />
      <h4 className="card-title">{ props.portfolio.title }</h4>
      <p className="card-text">{ props.portfolio.body }</p>
      <button className="card-btn">more</button>
    </div>
  );
}
