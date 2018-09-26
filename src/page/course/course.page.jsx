import React from 'react';
import './course.page.less';

import Button from '../../components/button/button.jsx';
import LinkButton from '../../components/link-button/link-button.jsx';
import Course from '../../components/course/course.jsx';

export default class CoursePage extends React.Component {
    constructor() {
        super();

        this.handleClickSave = this.handleClickSave.bind(this);
    }

    render() {
        return (
            <div className='container'>
                <Course />

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

