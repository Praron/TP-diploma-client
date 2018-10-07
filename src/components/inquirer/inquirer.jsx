import React from 'react';
import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Test from '../test/test.jsx';
import Button from '../button/button.jsx';

import './inquirer.less';
import {generateId} from '../../service/generateID';

export default class Inquirer extends React.Component {
    constructor(props) {
        super(props);

        this.clickAddTest = this.clickAddTest.bind(this);
    }

    render() {
        const {inquirerTitle, inquirerStartTime, inquirerEndTime} = this.props;

        const testsBlock = this._getTests();

        return (
            <div className='course'>
                <header className='course__header'>

                    <CourseHeader
                        titleLeft={'Опросник:'}
                        valueLeft={inquirerTitle || 'Название опросника:'}
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
                        handleClick={this.clickAddTest}
                    />
                    <Button
                        text={'Сохранить'}
                        style={'success'}
                    />
                </div>

            </div>
        );
    }

    clickAddTest() {
        const {handleAddTest, inquirerId} = this.props;

        handleAddTest({
            testId: `${generateId()}`,
            testTitle: '',
            timeLimit: '00:00:00',
            categories: [
                {
                    questions: []
                }
            ]
        }, inquirerId);
    }


    _getTests() {
        console.log('_getTests', this.props.tests);

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

Inquirer.propTypes = {
    inquirerTitle: PropTypes.string,
    inquirerStartTime: PropTypes.string,
    inquirerEndTime: PropTypes.string,
    tests: PropTypes.array,
    handleAddTest: PropTypes.func,
    inquirerId: PropTypes.any
};
