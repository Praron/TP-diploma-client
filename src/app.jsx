import React from 'react';
import {Switch, Route} from 'react-router-dom';

import CoursePage from './page/course/course.page.jsx';
import VideoPage from './page/video/video.page.jsx';
import ResultPage from './page/result/result.page.jsx';
import LoginPage from './page/login/login.page.jsx';
import NotFound from './components/not-found/not-found.jsx';

import Header from './components/header/header.jsx';
import QuestionPage from './page/question/question.page.jsx';

const App = () => (
    <React.Fragment>

        <Header/>

        <div className='content'>
            <Switch>
                <Route exact path='/' component={CoursePage}/>
                <Route path='/video' component={VideoPage}/>
                <Route path='/result' component={ResultPage}/>
                <Route path='/login' component={LoginPage}/>
                <Route exact path='/question/:id' component={QuestionPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>

    </React.Fragment>
);

export default App;
