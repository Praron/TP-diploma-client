import React from 'react';
import Input from '../../input/input.jsx';
import Button from '../../button/button.jsx';

import './answers-item.less';
//TODO сделать этот компонент

export default class AnswersItem extends React.Component {
    render() {
        return (
            <div className='answer-items'>
                <div className='answer-items__input'>
                    <Input
                        type={'text'}
                        placeholder={'Введите вариант ответа'}
                    />
                </div>

                <div className='answer-items__button'>
                    <Button
                        text={'Удалить'}
                        style={'danger'}
                    />
                </div>

                <div className='answer-items__button'>
                    <Button
                        text={'Добавить'}
                        style={'success'}
                    />
                </div>

            </div>
        );  
    }
} 
