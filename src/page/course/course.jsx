import React from 'react';
import './course.less';

import Button from '../../components/button/button.jsx';
import LinkButton from '../../components/link-button/link-button.jsx';
import AddButton from '../../components/add-button/add-button.jsx';

import CourseHeader from '../../components/course-header/course-header.jsx';
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
                        <CourseHeader
                            titleLeft={'Курс:'}
                            placeholderLeft={'Название курса:'}
                            withPeriod={true}
                        />
                    </header>
                    
                    <main className='course__test'>
                        <div className='course__test-header'>

                            <CourseHeader
                                titleLeft={'Tecт:'}
                                placeholderLeft={'Название теста'}
                                withPerion={false}
                            />

                        </div>
                        <div className='course__test-card'>

                            <Card />

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

    handleClickSave() {

    }
}

