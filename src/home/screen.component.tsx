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
          text: `CEO`,
        },
        {
          name: `黒澤 進伍`,
          image: `./images/shingo.jpg`,
          text: `CEO`,
        },
        {
          name: `上野 佑真`,
          image: `./images/yuma.jpg`,
          text: `CEO`,
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
          <img src="./images/dikusy_b_logo.png" alt="top_image" width="80%" height="auto" />
        </div>

        <div className="vision-wrapper">
          <h3 className="vision-title">{ texts.visionTitle }</h3>

          <p className="vision-sub-title">{ texts.subVision }</p>

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
            <p className="team-sub-title-text">{ texts.teamText }</p>
          </div>

          <div className="member-wrapper">
            {members.map((member, i) => 
              <MemberCardComponent member={member} key={i} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const texts = {
  visionTitle: `Just For Fun.`,
  subVision: `~ sub vision ~`,
  visionText1: `vision vision vision vision vision vision`,
  visionText2: `vision vision vision`,
  visionText3: `vision vision vision vision vision vision vision vision vision`,
  visionText4: `vision vision vision vision`,
  visionText5: `vision vision`,
  portfolioTitle: `Portfolio Portfolio`,
  portfolioText1: `portfolio portfolio portfolio`,
  portfolioText2: `portfolio portfolio portfolio portfolio portfolio`,
  portfolioText3: `portfolio portfolio portfolio portfolio`,
  teamTitle: `TEAM`,
  teamText: `Creator Member`,
  buttonText: `さらに表示する`,
}
