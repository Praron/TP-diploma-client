import React from 'react';
import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Test from '../test/test.jsx';
import Button from '../button/button.jsx';

import './inquirer.less';

export default class Inquirer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tests: this.props.tests,
        };

        this.handleAddTest = this.handleAddTest.bind(this);
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
                        handleClick={this.handleAddTest}
                    />
                    <Button
                        text={'Сохранить'}
                        style={'success'}
                    />
                </div>

            </div>
        );
    }

    handleAddTest() {
        this.setState({
            tests: this.state.tests.concat({
                testTitle: '',
                timeLimit: '00:00:00',
                categories: []
            })
        });
    }


    _getTests() {
        return this.state.tests.map(({testId, testTitle, timeLimit, categories}) => (
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
    tests: PropTypes.array
};
