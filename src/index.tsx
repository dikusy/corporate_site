import React from 'react';
import { HeaderComponent } from './components/header/header.component';
import { ScreenComponent as HomeScreenComponent } from './home/screen.component';
import { screenComponent as PortfolioScreenComponent } from './portfolio/screen.component'
import { screenComponent as ContactScreenComponent } from './contact/screen.component'
import { FooterComponent } from './components/footer/footer.component';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    <Router>
      <HeaderComponent />
      <Route path="/" component={HomeScreenComponent} />
      <Route path="/portfolio" component={PortfolioScreenComponent} />
      <Route path="/contact" component={ContactScreenComponent} />
    </Router>
    <FooterComponent />
  </React.Fragment>,
  document.getElementById('root')
);
serviceWorker.unregister();
