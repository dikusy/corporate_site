import React from 'react';
import { Member } from '../../home/screen.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import './style.css';

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
      </div>

      <div className="self-introduction-wrapper">
        <p>{ props.member.text }</p>
      </div>

      <div className="sns-icon-wrapper">
        <FontAwesomeIcon className="sns-icon-logo" icon={faFacebook} />
        <FontAwesomeIcon className="sns-icon-logo" icon={faTwitter} />
        <FontAwesomeIcon className="sns-icon-logo" icon={faGithub} />
      </div>
    </div>
  );
}
