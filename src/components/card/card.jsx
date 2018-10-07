import React from 'react';
import PropTypes from 'prop-types';

import './card.less';

import Input from '../input/input.jsx';
import LinkButton from '../link-button/link-button.jsx';
import Button from './../button/button.jsx';


export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryTitle: this.props.categoryTitle
        };

        this.clickSaveCard = this.clickSaveCard.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }


    render() {

        const {categoryTitle} = this.state;

        const questionsBlock = this._getListQuestion();

        return (
            <div className='card'>
                <div className='card__input'>

                    <Input
                        type={'text'}
                        placeholder={categoryTitle || 'Введите категорию вопроса'}
                        handleChange={this.onChangeInput}
                        value={categoryTitle}
                        fieldName={'categoryTitle'}
                    />

                </div>

                <ul className='card__question'>
                    {questionsBlock}
                </ul>

                <div className='card__button'>

                    <LinkButton
                        to={'question'}
                        text={'Добавить вопрос'}
                        style={'default'}
                    />

                    <Button
                        text={'Сохранить'}
                        style={'success'}
                        handleClick={this.clickSaveCard}
                    />

                </div>
            </div>
        );
    }

    onChangeInput(e) {
        console.log(e.target.name, e.target.value);

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    clickSaveCard() {
        const {inquirerId, testId, categoryId, handleSaveCategory} = this.props;
        const {categoryTitle} = this.state;

        handleSaveCategory(inquirerId, testId, categoryId, categoryTitle);
    }

    getTruncateText(text, length) {
        return text.length > length ?
            text.slice(0, length - 3) + '...' :
            text;
    }

    _getListQuestion() {
        return this.props.questions.map(({questionId, questionTitle}) => {
            return <li className='card__question-item' key={questionId}>
                <LinkButton
                    to={`question/${questionId}`}
                    text={this.getTruncateText(questionTitle, 40)}
                    style={'link'}
                />
            </li>;
        });
    }
}

Card.propTypes = {
    categoryTitle: PropTypes.string,
    questions: PropTypes.array,
    handleSaveCategory: PropTypes.func,
    testId: PropTypes.string,
    inquirerId: PropTypes.string,
    categoryId: PropTypes.string
};
