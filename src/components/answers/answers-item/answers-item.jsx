import React from 'react';
import Input from '../../input/input.jsx';
import Button from '../../button/button.jsx';

import PropTypes from 'prop-types';
import './answers-item.less';
//TODO сделать этот компонент

export default class AnswersItem extends React.Component {

    render() {

        const itemBlock = this._getItem();

        return (
            <React.Fragment>
                {itemBlock}
            </React.Fragment>
        );
    }

    _getItem() {
            return this.props.answers.map(({answerId, answerTitle, answerScore}, index) => (
            <div className='answer-items' key={answerId || index}>

                <div className='answer-items__input'>
                    <Input
                        type={'text'}
                        placeholder={'Введите вариант ответа'}
                        value={answerTitle || 'Введите вариант ответа'}
                    />
                </div>

                <div className='answer-items__score'>
                    <Input
                        type={'text'}
                        placeholder={'Балл'}
                        value={ answerScore || 'Балл'}
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
        ));
    }
}

AnswersItem.propTypes = {
    answers: PropTypes.array
};
