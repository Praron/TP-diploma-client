import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Course from './page/course/course.jsx';
import Video from './page/video/video.jsx';
import Result from './page/result/result.jsx';
import NotFound from './components/not-found/not-found.jsx';

import Header from './components/header/header.jsx';

const App = () => (
    <div className={'content'}>
        <Header />

        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Course}/>
                <Route path='/video' component={Video}/>
                <Route path='/result' component={Result}/>
                <Route component={NotFound}/>
            </Switch>
        </React.Fragment>

    </div>
);

export default App;
