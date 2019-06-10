import React from 'react';
import { Member } from '../../home/screen.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from './style.module.css';

interface Props {
  member: Member;
}

export const MemberCardComponent: React.SFC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={ props.member.image } alt="member_image" width="100%" />
      </div>

      <div className={styles.text_wrapper}>
        <h4>{ props.member.name }</h4>
      </div>

      <div className={styles.self_introduction_wrapper}>
        <p>{ props.member.text }</p>
      </div>

      <div className={styles.sns_icon_wrapper}>
        <FontAwesomeIcon className={styles.sns_icon_logo} icon={faFacebook} />
        <FontAwesomeIcon className={styles.sns_icon_logo} icon={faTwitter} />
        <FontAwesomeIcon className={styles.sns_icon_logo} icon={faGithub} />
      </div>
    </div>
  );
}
