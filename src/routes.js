import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layout';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCourse from './components/course/ManageCoursePage';

export default (
    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="courses" component={CoursesPage}/>
      <Route path="course/:id" component={ManageCourse}/>
      <Route path="course" component={ManageCourse}/>
    </Route>
  );