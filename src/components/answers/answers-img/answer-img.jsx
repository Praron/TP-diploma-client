import React from 'react';
import Button from '../../button/button.jsx';

import './answer-img.less';
//TODO сделать этот компонент

export default class AnswersImg extends React.Component {
    render() {
        return (
            <div className='answer-img'>
                <Button
                    text={'Загрузить фото'}
                    style={'success'}
                />
            </div>
        );
    }
}
