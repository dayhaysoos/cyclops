import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, browserHistory } from 'react-router';
import createBrowserHistory from 'history';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import TermsOfService from './components/TermsOfService/TermsOfService.jsx';
import Feedback from './components/Feedback/Feedback';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

//import CSS
import CSS from '../assets/styles/main.scss';

 const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    	<Route path="/home" components={Home} />
    	<Route path="/about" component={About} />
    	<Route path="/tos" component={TermsOfService} />
    	<Route path="/feedback" components={Feedback} />
    	<Route path="/privacy-policy" components={PrivacyPolicy} />
    </Route>
  </Router>
)

render(router, document.getElementById('app'));