import React from 'react';
import PropTypes from 'prop-types';

import './card.less';

import Input from '../input/input.jsx';
import LinkButton from '../link-button/link-button.jsx';
import Button from '../button/button.jsx';


export default class Card extends React.Component {

    render() {

        const {categoryTitle} = this.props;

        const questionsBlock = this._getListQuestion();

        return (
            <div className='card'>
                <div className='card__input'>

                    <Input
                        type={'text'}
                        placeholder={categoryTitle || 'Введите категорию вопроса'}
                    />

                </div>

                <ul className='card__question'>
                    {questionsBlock}
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
        return this.props.questions.map(({questionId, questionTitle}) =>
            <li className='card__question-item' key={questionId}>
                <LinkButton
                    to={`question/${questionId}`}
                    text={this.getTruncateText(questionTitle, 40)}
                    style={'link'}
                />
            </li>
        );
    }
}


Card.propTypes = {
    categoryTitle: PropTypes.string,
    questions: PropTypes.array
};
