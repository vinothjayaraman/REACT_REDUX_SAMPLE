import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layout';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';

export default (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
    </Route>
  );