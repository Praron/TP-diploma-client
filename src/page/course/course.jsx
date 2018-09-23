import React from 'react';
import './course.less';

import Button from '../../components/button/button.jsx';
import LinkButton from '../../components/link-button/link-button.jsx';

import AddButton from '../../components/add-button/add-button.jsx';

export default class Course extends React.Component {
    constructor() {
        super();
        
        this.handleClickSave = this.handleClickSave.bind(this);
    }
    
    render() {
        return (
            <div className='course__wrapper'>
                <div className='course'>

                    <header className='course__header-wrapper'>

                        <section className='course__header'>

                            <div className='course__title'>
                                <span className='course__title-text'>Курс:&nbsp;</span>
                                <div className='course__title-input'>
                                    <input type='text' placeholder={'введите название курса'}/>
                                </div>
                            </div>

                            <div className='course__time'>
                                <span className='course__time-text'>Период: c&nbsp;</span>
                                <input type='date' />
                                <span className='course__time-text'>&nbsp;до&nbsp;</span>
                                <input type='date' />
                            </div>

                        </section>

                        <section className='course__header'>

                            <div className='course__title'>
                                <span className='course__title-text'>Тест:&nbsp;</span>
                                <div className='course__title-input'>
                                    <input type='text' placeholder={'введите название теста'}/>
                                </div>
                            </div>

                            <div className='course__time'>
                                <span className='course__time-text'>Лимит времени:&nbsp;</span>
                                <input type='date' />
                                {/*<span className='course__time-text'>&nbsp;до&nbsp;</span>*/}
                                {/*<input type='date' />*/}
                            </div>

                        </section>


                    </header>

                    <main className='course__main'>
                        <div className='card'>

                            <div className='card__input'>
                                <input type='text' placeholder='Введите категорию вопроса'/>
                            </div>

                            <ul className='card__question'>

                                <li className='card__question-item'>
                                    <LinkButton
                                        to={`question/${0}`}
                                        text={this.getTruncateText('title', 40)}
                                        type={'link'}
                                    />
                                </li>

                                <li className='card__question-item'>
                                    <LinkButton
                                        to={`question/${1}`}
                                        text={this.getTruncateText('title', 40)}
                                        type={'link'}
                                    />
                                </li>

                                <li className='card__question-item'>
                                    <LinkButton
                                        to={`question/${2}`}
                                        text={this.getTruncateText('title', 40)}
                                        type={'link'}
                                    />
                                </li>

                                <li className='card__question-item'>
                                    <LinkButton
                                        to={`question/${3}`}
                                        text={this.getTruncateText('title', 40)}
                                        type={'link'}
                                    />
                                </li>

                                <AddButton size={'small'}/>
                            </ul>
                        </div>
                    </main>

                    <AddButton size={'medium'}/>

                    <footer className='course__footer'>
                        <Button
                            text={'Добавить курс'}
                            handleClick={this.handleClickSave}
                            type={'default'}
                        />

                        <Button 
                            text={'Сохранить'}
                            handleClick={this.handleClickSave}
                            type={'success'}
                        />
                    </footer>

                </div>
                
            </div>
        );
    }

    getTruncateText(text, length) {
        return text.length > length ?
            text.slice(0, length - 3) + '...' :
            text;
    }

    handleClickSave(e) {
        console.log(e);
    }
}
