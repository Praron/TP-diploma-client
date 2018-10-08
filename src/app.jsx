import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AnswerPage from './page/answer/answer.page.jsx';

const App = () => (
    <React.Fragment>

        <div className='content'>
            <Switch>
                <Route exact path='/' component={AnswerPage}/>
            </Switch>
        </div>

    </React.Fragment>
);

export default App;
