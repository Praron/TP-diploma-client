import React from 'react';
import './answer.page.less';
import Button from '../../components/button/button.jsx';

export default class AnswerPage extends React.Component {
    render() {
        return (
            <div className='answer'>
                <div className='answer__title'> Название теста </div>
                <div className='answer__text'> Девять бровей превращаются в устрицу, а затем едят ее? </div>
                <div className='answer__background'>
                    <form>
                        <div className='answer__form'>
                            <form className='pure-form'>
                                <label className='answer__oneFromSeveral' for='option-two' class='pure-radio'>
                                    <input id='option-two' type='radio' name='optionsRadios' value='option1'/>
                                    Им было скучно до такой степени
                                </label>
                                <label className='answer__oneFromSeveral' for='option-two' class='pure-radio'>
                                    <input id='option-two' type='radio' name='optionsRadios' value='option1'/>
                                    Хорошо быть хорошим вором
                                </label>
                                <label className='answer__oneFromSeveral' for='option-two' class='pure-radio'> <input id='option-two' type='radio' name='optionsRadios' value='option1'/>
                                    Во мраке имманентного холода
                                </label>
                            </form>

                        </div>
                        <Button className='answer__next-button' text='Следующий вопрос' style='success'/>
                    </form>
                </div>

                <div className='progress-lines answer__progress-lines'>
                    <div className='progress-lines__title answer__progress-title'> Текущий прогресс </div>
                    <div className='answer__progress-line'> Алгоритмы </div>
                    <div className='answer__progress-line'> Что-то другое </div>
                    <div className='answer__progress-line'> Что-то третье </div>
                </div>
            </div>
            );
    }
}
