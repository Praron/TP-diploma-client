import React from 'react';
import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Test from '../test/test.jsx';
import Button from '../button/button.jsx';

import './course.less';

export default class Course extends React.Component {
    render() {
        const {inquirerTitle, inquirerStartTime, inquirerEndTime} = this.props;

        const testsBlock = this._getTests();

        return (
            <div className='course'>
                <header className='course__header'>

                    <CourseHeader
                        titleLeft={'Опросник:'}
                        placeholderLeft={inquirerTitle || 'Название опросника:'}
                        withPeriod={true}
                        startTime={inquirerStartTime}
                        endTime={inquirerEndTime}
                    />

                </header>

                <main className='course__test'>

                    {testsBlock}

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

    _getTests() {
        return this.props.tests.map(({testId, testTitle, timeLimit, categories}) => (
            <Test
                key={testId}
                testTitle={testTitle}
                timeLimit={timeLimit}
                categories={categories}
            />
        ));
    }
}

Course.propTypes = {
    inquirerTitle: PropTypes.string,
    inquirerStartTime: PropTypes.string,
    inquirerEndTime: PropTypes.string,
    tests: PropTypes.array
};
