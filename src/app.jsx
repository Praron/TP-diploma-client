import React from 'react';
import {Switch, Route} from 'react-router-dom';

import CoursePage from './page/inquirer/inquirer.page.jsx';
import VideoPage from './page/video/video.page.jsx';
import ResultPage from './page/result/result.page.jsx';
import LoginPage from './page/login/login.page.jsx';
import NotFound from './components/not-found/not-found.jsx';

import Header from './components/header/header.jsx';
import QuestionPage from './page/question/question.page.jsx';

import PrivateRoute from './components/private-route/private-route.jsx';

const App = () => (
    <React.Fragment>

        <Header/>

        <div className='content'>
            <Switch>

                <PrivateRoute exact path='/' component={CoursePage} />
                <PrivateRoute path='/video' component={VideoPage} />
                <PrivateRoute path='/result' component={ResultPage} />
                <PrivateRoute exact path='/question/:id' component={QuestionPage} />

                <PrivateRoute exact path='/question' component={QuestionPage} />

                <Route path='/login' component={LoginPage}/>
                <Route component={NotFound}/>

            </Switch>
        </div>

    </React.Fragment>
);

export default App;
