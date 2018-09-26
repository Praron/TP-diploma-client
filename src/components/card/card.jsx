import React from 'react';

import './card.less';

import Input from '../input/input.jsx';
import LinkButton from '../link-button/link-button.jsx';
import {questions} from './initialStateQuestion';
import Button from '../button/button.jsx';

export default class Card extends React.Component {
    constructor() {
        super();

        this.state = {
            questions: questions,
        };
    }

    render() {

        const questionsTitle = this._getListQuestion();

        return (
            <div className='card'>
                <div className='card__input'>

                    <Input
                        type={'text'}
                        placeholder={'Введите категорию вопроса'}
                    />

                </div>

                <ul className='card__question'>
                    {questionsTitle}
                </ul>

                <div className='card__button'>
                    <Button
                        text={'Добавить вопрос'}
                        style={'default'}
                    />
                </div>

            </div>
        );
    }

    getTruncateText(text, length) {
        return text.length > length ?
            text.slice(0, length - 3) + '...' :
            text;
    }
    
    _getListQuestion() {
        return this.state.questions.map(question =>
            <li className='card__question-item' key={question.id}>
                <LinkButton
                    to={`question/${question.id}`}
                    text={this.getTruncateText(question.title, 40)}
                    style={'link'}
                />
            </li>
        );
    }
}