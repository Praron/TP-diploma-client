import React from 'react';
// import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Test from '../test/test.jsx';
import Button from '../button/button.jsx';

import './course.less';

export default class Course extends React.Component {
    render() {
        return (
            <div className='course'>
                <header className='course__header'>
                    <CourseHeader
                        titleLeft={'Опросник:'}
                        placeholderLeft={'Название опросника:'}
                        withPeriod={true}
                    />

                </header>

                <main className='course__test'>

                    <Test />

                </main>

                <div className='course__button'>
                    <Button
                        text={'Добавить Тест'}
                        style={'default'}
                    />
                </div>

            </div>
        );
    }
}

Course.propTypes = {
};
