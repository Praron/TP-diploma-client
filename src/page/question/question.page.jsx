import React from 'react';
import {connect} from 'react-redux';

import './question.page.less';
import Input from '../../components/input/input.jsx';
import Select from '../../components/select/select.jsx';

import AnswerText from '../../components/answers/answer-text/answer-text.jsx';
import AnswersImg from '../../components/answers/answers-img/answer-img.jsx';
import AnswersItem from '../../components/answers/answers-item/answers-item.jsx';

import {getQuestion} from '../../actions/question.action.js';

class QuestionPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAnswerText: false,
            isAnswersImg: false,
            isAnswersItem: true
        };

        this.handleSelect = this.handleSelect.bind(this);
        this.handleAnswerText = this.handleAnswerText.bind(this);

    }

    componentDidMount() {
        this.props.getQuestion(this.props.match.params.id);
    }

    render() {
        const {isAnswerText, isAnswersImg, isAnswersItem} = this.state;

        const {questionTitle, questionType, answers} = this.props.questionData || {};

        return <div className='container'>

            <div className='question'>
                <header className='question__header'>
                    <div className='question__header-input'>
                        <Input
                            type={'text'}
                            value={questionTitle || 'Введите вопрос'}
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
                            typeSelect={questionType || 'checkbox'}
                        />
                    </div>
                </header>

                <main className='question__main'>
                    {
                        isAnswerText && <AnswerText
                            handleAnswersText={this.handleAnswerText} // TODO доделать компонент
                        />
                    }

                    {
                        isAnswersImg && <AnswersImg/> // TODO доделать компонент
                    }

                    {
                        isAnswersItem && <AnswersItem
                            answers={answers || []}
                        />
                    }

                </main>
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


function mapStateToProps(state) {
    return {
        questionData: state.question.questionData,
        errorMsgQuestion: state.question.errorMsgQuestion,
        isLoadingQuestion: state.question.isLoadingQuestion
    };
}

const mapDispatchToProps = (dispatch) => ({
    getQuestion: (id) => dispatch(getQuestion(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);

