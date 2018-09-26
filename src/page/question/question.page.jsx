import React from 'react';
import './question.page.less';
import Input from '../../components/input/input.jsx';
import Select from '../../components/select/select.jsx';
import PropTypes from 'prop-types';
import {question} from './initialSatetQuestion';

import AnswerText from '../../components/answers/answer-text/answer-text.jsx';
import AnswersImg from '../../components/answers/answers-img/answer-img.jsx';
import AnswersItem from '../../components/answers/answers-item/answers-item.jsx';
import Button from '../../components/button/button.jsx';


export default class QuestionPage extends React.Component {
    constructor() {
        super();

        this.state = {
            isAnswerText: false,
            isAnswersImg: false,
            isAnswersItem: true
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleAnswerText = this.handleAnswerText.bind(this);
    }

    render() {
        const {isAnswerText, isAnswersImg, isAnswersItem} = this.state;

        return <div className='container'>

            <div className='question'>
                <header className='question__header'>
                    <div className='question__header-input'>
                        <Input
                            type={'Введите вопрос'}
                            value={question.title}
                        />
                    </div>

                    <div className='question__header-select'>
                        <Select
                            options={[
                                {
                                    label: 'Вопрос с несколькими ответами',
                                    value: 'checkbox'
                                },
                                {
                                    label: 'Вопрос с одним ответом',
                                    value: 'radio'
                                },
                                {
                                    label: 'Вопрос с картинкой',
                                    value: 'images'
                                },
                                {
                                    label: 'Видео вопрос',
                                    value: 'video'
                                }
                            ]}
                            handleSelect={this.handleSelect}
                            typeSelect={'checkbox'}
                        />
                    </div>
                </header>

                <main className='question__main'>

                    {
                        isAnswerText && <AnswerText
                            handleAnswersText={this.handleAnswerText}
                        />
                    }

                    {
                        isAnswersImg && <AnswersImg/>
                    }

                    {
                        isAnswersItem && <AnswersItem/>
                    }

                </main>

                <footer className='question__footer'>
                    <div className='question__footer-button'>
                        <Button
                            text={'Отменить'}
                            style={'danger'}
                        />
                    </div>

                    <div className='question__footer-button'>
                        <Button
                            text={'Сохранить'}
                            style={'success'}
                        />
                    </div>

                </footer>

            </div>


        </div>;
    }

    handleAnswerText(text) {
        console.log(text);
    }

    handleSelect(value) {
        switch (value) {
            case 'checkbox':
                this.setState({
                    isAnswerText: false,
                    isAnswersImg: false,
                    isAnswersItem: true
                });
                return;
            case 'radio':
                this.setState({
                    isAnswerText: false,
                    isAnswersImg: false,
                    isAnswersItem: true
                });
                return;
            case 'images':
                this.setState({
                    isAnswerText: false,
                    isAnswersImg: true,
                    isAnswersItem: false
                });
                return;

            case 'video':
                this.setState({
                    isAnswerText: true,
                    isAnswersImg: false,
                    isAnswersItem: false
                });
                return;
        }
    }

    back(e) {
        e.stopPropagation();
        history.goBack();
    }
}

QuestionPage.propTypes = {
    match: PropTypes.object,
};

