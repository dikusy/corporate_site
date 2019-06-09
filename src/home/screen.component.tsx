import React, { Component } from 'react';
import { CardComponent } from '../components/card/card.component';
import { ButtonComponent } from '../components/button/button.component';
import { MemberCardComponent } from '../components/memberCard/member.card.component';
import './style.css';


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
      <div className="home-container">
        <div className="home-image-wrapper">
          {/* <img src="./images/dikusy_top02.png" alt="top_image" width="80%" height="auto" /> */}
          <img src="./images/dikusy_b_logo02.png" alt="top_image" width="60%" height="auto" />
        </div>

        <div className="vision-wrapper">
          <h3 className="vision-title">{ texts.visionTitle }</h3>

          <p className="vision-sub-title">{ texts.visionSubTitle }</p>

          <div className="vision-text-wrapper">
            <div className="vision-text-top-wrapper">
              <p>{ texts.visionText1 }</p>
              <p>{ texts.visionText2 }</p>
              <p>{ texts.visionText3 }</p>
            </div>
            <div className="vision-text-bottom-wrapper">
              <p>{ texts.visionText4 }</p>
              <p>{ texts.visionText5 }</p>
            </div>
          </div>
        </div>

        <div className="portfolio-wrapper" id="portfolio">
          <div className="portfolio-image-wrapper">
            <img src="./images/dikusy_img_top_01_1920_500.jpg" alt="portfolio_image" width="100%" />
          </div>

          <div className="portfolio-text-wrapper">
            <h3 className="portfolio-title">{ texts.portfolioTitle }</h3>
            <div className="portfolio-sub-text-wrapper">
              <p>{ texts.portfolioText1 }</p>
              <p>{ texts.portfolioText2 }</p>
              <p>{ texts.portfolioText3 }</p>
            </div>
          </div>

          <div className="card-wrapper">
            {portfolios.map((portfolio, i) => 
              <CardComponent portfolio={ portfolio } key={i} />
            )}
          </div>

          <div className="more-button-wrapper">
            <ButtonComponent text={texts.buttonText} />
          </div>
        </div>

        <div className="team-wrapper" id="team">
          <div className="team-image-wrapper">
            <img src="./images/dikusy_img_02_1920_500.jpg" alt="company_img" width="100%" />
          </div>

          <div className="team-title-wrapper">
            <h3 className="team-title-text">{ texts.teamTitle }</h3>
            <p className="team-sub-title-text">{ texts.teamSubTitle }</p>
          </div>

          <div className="member-wrapper">
            {members.map((member, i) => 
              <MemberCardComponent member={member} key={i} />
            )}
          </div>
        </div>

        <div className="company-wrapper" id="company">
          <div className="company-iamge-wrapper">
            <img src="./images/dikusy_company_1920_500.jpg" alt="company_img" width="100%" />
          </div>

          <div className="company-text-wrapper">
            <h3 className="company-title-text">{ texts.companyTitle }</h3>
            <p className="company-sub-title-text">{ texts.companySubTitle }</p>
          </div>

          <div className="company-detail-wrapper">
            <dl className="company-detail-section">
              <dt className="company-detail-section-column">{ texts.companyNameColumn }</dt>
              <dd>{ texts.companyName }</dd>
            </dl>
            <dl className="company-detail-section">
              <dt className="company-detail-section-column">{ texts.establishmentColumn }</dt>
              <dd>{ texts.establishment }</dd>
            </dl>
            <dl className="company-detail-section">
              <dt className="company-detail-section-column">{ texts.capitalColumn }</dt>
              <dd>{ texts.capital }</dd>
            </dl>
            <dl className="company-detail-section">
              <dt className="company-detail-section-column">{ texts.addressColumn }</dt>
              <dd>
                <p>{ texts.postal }</p>
                <p>{ texts.address }</p>
              </dd>
            </dl>
            <dl className="company-detail-section">
              <dt className="company-detail-section-column">{ texts.businessContentColumn }</dt>
              <dd>{ texts.businessContent }</dd>
            </dl>
          </div>
        </div>

        <div className="contact-wrapper" id="contact">
          <div className="contact-image-wrapper">
            <img src="./images/dikusy_contact03_1920_500.jpg" alt="contact_img" width="100%" />
          </div>
          <div className="contact-text-wrapper">
            <h3 className="contact-title-text">{ texts.contactTitle }</h3>
            <p className="contact-sub-title-text">{ texts.contactSubTitle }</p>
          </div>

          <div className="contact-form-wrapper">
            <div className="contact-form-company-name-wrapper">
              <div className="contact-form-company-logo">
                <img src="./images/dikusy_b_logo02.png" alt="dikusy_logo" width="50%"/>
              </div>
              <p className="contact-form-company-name-text">{ texts.companyName }</p>
            </div>

            <div className="contact-form-address-wrapper">
              <p>{ texts.postal }</p>
              <p>{ texts.address }</p>
              <p>{ texts.phoneNumber }</p>
            </div>

            <div className="contact-form-email-wrapper">
              <p>{ texts.contactEmailText }</p>
              <p className="email-text">{ texts.email }</p>
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
