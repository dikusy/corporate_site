import React, { Component } from 'react';
import { CardComponent } from '../components/card/card.component';
import { ButtonComponent } from '../components/button/button.component';
import { MemberCardComponent } from '../components/memberCard/member.card.component';
import styles from './style.module.css';


interface Props {}

export interface Portfolio {
  title: string;
  body: string;
  image: string;
}

export interface Member {
  name: string;
  image: string;
  text: string;
}

interface State {
  portfolios: Portfolio[];
  members: Member[];
}

export class ScreenComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      portfolios: [
        {
          title: `sample1`,
          body: `sample1 sample1 sample1`,
          image: `./images/dikusy_b_logo.png`,
        },
        {
          title: `sample2`,
          body: `sample2 sample2 sample2`,
          image: `./images/dikusy_b_logo.png`,
        },
        {
          title: `sample3`,
          body: `sample3 sample3 sample3`,
          image: `./images/dikusy_b_logo.png`,
        },
      ],
      members: [
        {
          name: `泉谷 暖`,
          image: `./images/dan.jpg`,
          text: `smaple sample sample sample sample sample sample sample sample sample sample`,
        },
        {
          name: `黒澤 進伍`,
          image: `./images/shingo.jpg`,
          text: `sample sample sample smaple sample sample sample sample sample sample sample sample sample sample`,
        },
        {
          name: `上野 佑真`,
          image: `./images/yuma.jpg`,
          text: `sample smaple sample sample sample sample sample sample sample sample sample sample`,
        },
      ]
    }
  }
  public render() {
    const { portfolios, members } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.top_image_wrapper}>
          {/* <img src="./images/dikusy_top02.png" alt="top_image" width="80%" height="auto" /> */}
          <img src="./images/dikusy_b_logo02.png" alt="top_image" width="60%" height="auto" />
        </div>

        <div className={styles.vision_wrapper}>
          <h3 className={styles.vision_title_text}>{ texts.visionTitle }</h3>

          <p className={styles.vision_sub_title_text}>{ texts.visionSubTitle }</p>

          <div className={styles.vision_text_wrapper}>
            <div className={styles.vision_text_top_wrapper}>
              <p>{ texts.visionText1 }</p>
              <p>{ texts.visionText2 }</p>
              <p>{ texts.visionText3 }</p>
            </div>
            <div className={styles.vision_text_bottom_wrapper}>
              <p>{ texts.visionText4 }</p>
              <p>{ texts.visionText5 }</p>
            </div>
          </div>
        </div>

        <div className={styles.portfolio_wrapper} id="portfolio">
          <div className={styles.portfolio_image_wrapper}>
            <img src="./images/dikusy_img_top_01_1920_500.jpg" alt="portfolio_image" width="100%" />
          </div>

          <div className={styles.portfolio_text_wrapper}>
            <h3 className={styles.portfolio_title_text}>{ texts.portfolioTitle }</h3>
            <div className={styles.portfolio_sub_text_wrapper}>
              <p>{ texts.portfolioText1 }</p>
              <p>{ texts.portfolioText2 }</p>
              <p>{ texts.portfolioText3 }</p>
            </div>
          </div>

          <div className={styles.card_wrapper}>
            {portfolios.map((portfolio, i) => 
              <CardComponent portfolio={ portfolio } key={i} />
            )}
          </div>

          <div className={styles.more_button_wrapper}>
            <ButtonComponent text={texts.buttonText} />
          </div>
        </div>

        <div className={styles.team_wrapper} id="team">
          <div className={styles.team_image_wrapper}>
            <img src="./images/dikusy_img_02_1920_500.jpg" alt="company_img" width="100%" />
          </div>

          <div className={styles.team_title_wrapper}>
            <h3 className={styles.team_title_text}>{ texts.teamTitle }</h3>
            <p className={styles.team_sub_title_text}>{ texts.teamSubTitle }</p>
          </div>

          <div className={styles.member_wrapper}>
            {members.map((member, i) => 
              <MemberCardComponent member={member} key={i} />
            )}
          </div>
        </div>

        <div className={styles.company_wrapper} id="company">
          <div className={styles.company_iamge_wrapper}>
            <img src="./images/dikusy_company_1920_500.jpg" alt="company_img" width="100%" />
          </div>

          <div className={styles.company_text_wrapper}>
            <h3 className={styles.company_title_text}>{ texts.companyTitle }</h3>
            <p className={styles.company_sub_title_text}>{ texts.companySubTitle }</p>
          </div>

          <div className={styles.company_detail_wrapper}>
            <dl className={styles.company_detail_section}>
              <dt className={styles.company_detail_section_column}>{ texts.companyNameColumn }</dt>
              <dd>{ texts.companyName }</dd>
            </dl>
            <dl className={styles.company_detail_section}>
              <dt className={styles.company_detail_section_column}>{ texts.establishmentColumn }</dt>
              <dd>{ texts.establishment }</dd>
            </dl>
            <dl className={styles.company_detail_section}>
              <dt className={styles.company_detail_section_column}>{ texts.capitalColumn }</dt>
              <dd>{ texts.capital }</dd>
            </dl>
            <dl className={styles.company_detail_section}>
              <dt className={styles.company_detail_section_column}>{ texts.addressColumn }</dt>
              <dd>
                <p>{ texts.postal }</p>
                <p>{ texts.address }</p>
              </dd>
            </dl>
            <dl className={styles.company_detail_section}>
              <dt className={styles.company_detail_section_column}>{ texts.businessContentColumn }</dt>
              <dd>{ texts.businessContent }</dd>
            </dl>
          </div>
        </div>

        <div className={styles.contact_wrapper} id="contact">
          <div className={styles.contact_image_wrapper}>
            <img src="./images/dikusy_contact03_1920_500.jpg" alt="contact_img" width="100%" />
          </div>
          <div className={styles.contact_text_wrapper}>
            <h3 className={styles.contact_title_text}>{ texts.contactTitle }</h3>
            <p className={styles.contact_sub_title_text}>{ texts.contactSubTitle }</p>
          </div>

          <div className={styles.contact_form_wrapper}>
            <div className={styles.contact_form_company_name_wrapper}>
              <div className={styles.contact_form_company_logo}>
                <img src="./images/dikusy_b_logo02.png" alt="dikusy_logo" width="50%"/>
              </div>
              <p className={styles.contact_form_company_name_text}>{ texts.companyName }</p>
            </div>

            <div className={styles.contact_form_address_wrapper}>
              <p>{ texts.postal }</p>
              <p>{ texts.address }</p>
              <p>{ texts.phoneNumber }</p>
            </div>

            <div className={styles.contact_form_email_wrapper}>
              <p>{ texts.contactEmailText }</p>
              <p className={styles.email_text}>{ texts.email }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const texts = {
  companyName: `ディクシー合同会社`,
  postal: `〒000-0000`,
  address: `東京都◯◯◯区◯◯◯ ◯丁目◯番地◯号`,
  phoneNumber: `TEL: 03-0000-0000`,
  email: `info@dikusy.com`,
  establishment: `2019年 7月 7日`,
  capital: `150,000円`,
  businessContent: `web制作・企画・開発・運営`,
  
  visionTitle: `Fun With Intention.`,
  visionSubTitle: `~ sub vision ~`,
  visionText1: `「GEEK！」`,
  visionText2: `そんなフレーズにふらっと集まった３人が、`,
  visionText3: `それぞれの道を進みながら、仲間として楽しいことをする！`,
  visionText4: `決して同じ志を持っていたわけではない`,
  visionText5: `ただただ、コードに触れ、作る楽しみとそれを話すワクワクを形にした。そんな会社`,

  portfolioTitle: `Portfolio`,
  portfolioText1: `portfolio portfolio portfolio`,
  portfolioText2: `portfolio portfolio portfolio portfolio portfolio`,
  portfolioText3: `portfolio portfolio portfolio portfolio`,

  teamTitle: `Team`,
  teamSubTitle: `Creator Member`,
  buttonText: `View More Portfolio`,

  companyTitle: `Company`,
  companySubTitle: `会社概要`,
  companyNameColumn: `会社名`,
  establishmentColumn: `設立`,
  capitalColumn: `資本金`,
  addressColumn: `所在地`,
  businessContentColumn: `事業内容`,

  contactTitle: `Contact Us`,
  contactSubTitle: `お問い合わせ`,
  contactEmailText: `下記メールアドレスに直接お問い合わせください。`,
}
