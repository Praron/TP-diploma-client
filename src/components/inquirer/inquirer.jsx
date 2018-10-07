import React from 'react';
import PropTypes from 'prop-types';

import InquirerHeader from '../inquirer-header/inquirer-header.jsx';
import Test from '../test/test.jsx';
import Button from '../button/button.jsx';

import './inquirer.less';
import {generateId} from '../../service/generate-id';

export default class Inquirer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valueLeft: this.props.inquirerTitle,
            startTime: this.props.inquirerStartTime,
            endTime: this.props.inquirerEndTime
        };

        this.clickAddTest = this.clickAddTest.bind(this);
        this.handleSaveInquirer = this.handleSaveInquirer.bind(this);
        this.onChangeHeaderInput = this.onChangeHeaderInput.bind(this);
    }

    render() {
        const {valueLeft, startTime, endTime} = this.state;

        const testsBlock = this._getTests();

        return (
            <div className='course'>
                <header className='course__header'>

                    <InquirerHeader
                        titleLeft={'Опросник:'}
                        valueLeft={valueLeft || 'Название опросника:'}
                        withPeriod={true}
                        startTime={startTime}
                        endTime={endTime}
                        handlerHeaderInput={this.onChangeHeaderInput}
                    />

                    <Button
                        text={'Сохранить данные опроса'}
                        handleClick={this.handleSaveInquirer}
                        style={'success'}
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
                </div>

            </div>
        );
    }

    onChangeHeaderInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSaveInquirer() {
        const inquirerId = this.props.inquirerId;
        const {valueLeft, startTime, endTime} = this.state;

        this.props.handleSaveInquirer(inquirerId, valueLeft, startTime, endTime);
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
        const {handleAddCategory, inquirerId, handleSaveTest} = this.props;

        return this.props.tests.map(({testId, testTitle, timeLimit, categories}) => (
                <Test
                    key={testId}
                    testTitle={testTitle}
                    limitTime={timeLimit}
                    categories={categories}
                    handleAddCategory={handleAddCategory}
                    testId={testId + ''}
                    inquirerId={inquirerId}
                    handleSaveTest={handleSaveTest}
                />
            )
        );
    }
}

Inquirer.propTypes = {
    inquirerTitle: PropTypes.string,
    inquirerStartTime: PropTypes.string,
    inquirerEndTime: PropTypes.string,
    tests: PropTypes.array,
    handleAddTest: PropTypes.func,
    inquirerId: PropTypes.any,
    handleAddCategory: PropTypes.func,
    handleSaveInquirer: PropTypes.func,
    handleSaveTest: PropTypes.func
};
