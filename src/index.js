import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory } from 'react-router'
import './css/index.css';
import Home from './modules/App';
import Skills from './modules/skills';
import Contact from './modules/contact';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/skills" component={Skills}/>
    <Route path="/contact" component={Contact}/>
  </Router>, document.getElementById('root'));
registerServiceWorker();
