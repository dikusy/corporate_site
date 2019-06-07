import React from 'react';
import './style.css';
import { Member } from '../../home/screen.component';

interface Props {
  member: Member;
}

export const MemberCardComponent: React.SFC<Props> = (props) => {
  return (
    <div className="member-card-wrapper">
      <div className="member-card-image-wrapper">
        <img className="member-card-image" src={ props.member.image } alt="member_image" width="100%" />
      </div>

      <div className="member-card-text-wrapper">
        <h4>{ props.member.name }</h4>
        <p>{ props.member.text }</p>
      </div>
    </div>
  );
}
