import React from 'react';
import './answer.page.less';
import Button from '../../components/button/button.jsx';

export default class AnswerPage extends React.Component {
    render() {
        return (
            <div className='answer-page'>
                <div className='answer-page__title'> Название теста </div>
                <div className='answer answer-page__answer'>
                    <div className='answer__text'> Девять бровей превращаются в устрицу, а затем едят ее? </div>
                    <div className='answer__background'>
                        <div className='answer__form'>
                            <form className='pure-form'>
                                <label className='answer__radio pure-radio'>
                                    <input type='radio'/>
                                    <div className="answer__radio-text">Им было скучно до такой степени</div>
                                </label>
                                <label className='answer__radio pure-radio'>
                                    <input type='radio'/>
                                    <div className="answer__radio-text">Хорошо быть хорошим вором</div>
                                </label>
                                <label className='answer__radio pure-radio'>
                                    <input type='radio'/>
                                    <div className="answer__radio-text">Во мраке имманентного холода</div>
                                </label>
                            </form>

                        </div>
                        <Button className='answer__next-button' text='Следующий вопрос' style='success'/>
                    </div>

                    <div className='progress-lines answer__progress-lines'>
                        <div className='progress-lines__title answer__progress-title'> Текущий прогресс </div>
                        <div className='answer__progress-line'> Алгоритмы </div>
                        <div className='answer__progress-line'> Что-то другое </div>
                        <div className='answer__progress-line'> Что-то третье </div>
                    </div>
                </div>
            </div>
            );
    }
}
