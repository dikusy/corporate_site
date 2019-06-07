import React from 'react';
import './style.css';

interface Props {
  text: string;
}

export const ButtonComponent: React.SFC <Props> = (props) => {
  return (
    <button className="button-text">{props.text}</button>
  );
}
