import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Course from './page/course/course.jsx';
import Video from './page/video/video.jsx';
import Result from './page/result/result.jsx';
import Login from './page/login/login.jsx';
import NotFound from './components/not-found/not-found.jsx';

import Header from './components/header/header.jsx';
import Question from './page/question/question.jsx';

const App = () => (
    <React.Fragment>
        <Header/>

        <div className='content'>
            <Switch>
                <Route exact path='/' component={Course}/>
                <Route path='/video' component={Video}/>
                <Route path='/result' component={Result}/>
                <Route path='/login' component={Login}/>
                <Route exact path='/question/:id' component={Question}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </React.Fragment>
);

export default App;
