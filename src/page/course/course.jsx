import React from 'react';
import './course.less';

import Button from '../../components/button/button.jsx';
import LinkButton from '../../components/link-button/link-button.jsx';
import Input from '../../components/input/input.jsx';
import AddButton from '../../components/add-button/add-button.jsx';

import Card from '../../components/card/card.jsx';

export default class Course extends React.Component {
    constructor() {
        super();

        this.handleClickSave = this.handleClickSave.bind(this);
    }

    render() {
        return (
            <div className='container'>
                
                <section className='course'>
                    <header className='course__header'>
                        
                        <section className='course-header'>

                            <div className='course-header__title'>
                                <span className='course-header__text'>Курс:&nbsp;</span>
                                <div className='course-header__input'>

                                    <Input
                                        type={'text'}
                                        placeholder={'Введите название курса'}
                                    />

                                </div>
                            </div>

                            <div className='course-header__time'>
                                <span className='course-header__text'>Период: c&nbsp;</span>

                                <Input
                                    type={'date'}
                                />

                                <span className='course-header__text'>&nbsp;до&nbsp;</span>

                                <Input
                                    type={'date'}
                                />

                            </div>

                        </section>
                        
                    </header>
                    
                    <main className='course__test'>
                        <div className='course__test-header'>

                            <section className='course-header'>

                                <div className='course-header__title'>
                                    <span className='course-header__text'>Тест:&nbsp;</span>
                                    <div className='course-header__input'>

                                        <Input
                                            type={'text'}
                                            placeholder={'Введите название теста'}
                                        />

                                    </div>
                                </div>

                                <div className='course-header__time'>
                                    <span className='course-header__text'>Лимит времени:&nbsp;</span>

                                    <Input
                                        type={'time'}
                                    />

                                </div>

                            </section>
                            
                        </div>
                        <div className='course__test-card'>


                            <Card />
                                {/*<div className='card'>*/}
                                    {/*<div className='card__input'>*/}

                                        {/*<Input*/}
                                            {/*type={'text'}*/}
                                            {/*placeholder={'Введите категорию вопроса'}*/}
                                        {/*/>*/}

                                    {/*</div>*/}

                                    {/*<ul className='card__question'>*/}

                                        {/*<li className='card__question-item'>*/}
                                            {/*<LinkButton*/}
                                                {/*to={`question/${0}`}*/}
                                                {/*text={this.getTruncateText('title', 40)}*/}
                                                {/*style={'link'}*/}
                                            {/*/>*/}
                                        {/*</li>*/}

                                        {/*<li className='card__question-item'>*/}
                                            {/*<LinkButton*/}
                                                {/*to={`question/${1}`}*/}
                                                {/*text={this.getTruncateText('title', 40)}*/}
                                                {/*style={'link'}*/}
                                            {/*/>*/}
                                        {/*</li>*/}

                                        {/*<li className='card__question-item'>*/}
                                            {/*<LinkButton*/}
                                                {/*to={`question/${2}`}*/}
                                                {/*text={this.getTruncateText('title', 40)}*/}
                                                {/*style={'link'}*/}
                                            {/*/>*/}
                                        {/*</li>*/}

                                        {/*<li className='card__question-item'>*/}
                                            {/*<LinkButton*/}
                                                {/*to={`question/${3}`}*/}
                                                {/*text={this.getTruncateText('title', 40)}*/}
                                                {/*style={'link'}*/}
                                            {/*/>*/}
                                        {/*</li>*/}
                                    {/*</ul>*/}

                                    {/*<AddButton size={'small'}/>*/}

                                {/*</div>*/}

                        </div>

                    </main>

                    <AddButton size={'medium'}/>

                </section>

                <footer className='footer'>

                    <Button
                        text={'Добавить курс'}
                        handleClick={this.handleClickSave}
                        style={'default'}
                    />

                    <Button
                        text={'Сохранить'}
                        handleClick={this.handleClickSave}
                        style={'success'}
                    />

                </footer>

                <LinkButton
                    to={'/login'}
                    text={'страница входа'}
                />

            </div>
        );
    }

    handleClickSave(e) {
        console.log(e);
    }
}

