import React from 'react';
import PropTypes from 'prop-types';

import InquirerHeader from '../inquirer-header/inquirer-header.jsx';
import Card from '../card/card.jsx';
import Button from '../button/button.jsx';

import './test.less';
import {generateId} from '../../service/generate-id';


export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valueLeft: this.props.testTitle,
            limitTime: this.props.limitTime
        };

        this.clickAddCategory = this.clickAddCategory.bind(this);
        this.clickSaveTest = this.clickSaveTest.bind(this);
        this.onChangeHeaderInput = this.onChangeHeaderInput.bind(this);
    }

    render() {
        const {valueLeft, limitTime} = this.state;
        const cardBlock = this._getCard();

        return (
            <div className='test'>

                <div className='test__header'>

                    <InquirerHeader
                        titleLeft={'Tecт:'}
                        valueLeft={valueLeft || 'Название теста'}
                        withPerion={false}
                        limitTime={limitTime}
                        handlerHeaderInput={this.onChangeHeaderInput}
                    />

                    <Button
                        text={'Сохранить данные теста'}
                        handleClick={this.clickSaveTest}
                        style={'success'}
                    />

                </div>

                <div className='test__card'>

                    {cardBlock}

                </div>

                <div className='test__button'>
                    <Button
                        text={'Добавить категорию'}
                        style={'default'}
                        handleClick={this.clickAddCategory}
                    />
                    <Button
                        text={'Сохранить данные категории'}
                        style={'success'}
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

    clickSaveTest() {
        const testId = this.props.testId;
        const {valueLeft, limitTime} = this.state;

        this.props.handleSaveTest(testId, valueLeft, limitTime);
    }

    clickAddCategory() {
        const {handleAddCategory, testId, inquirerId} = this.props;

        handleAddCategory({
            categoryId: `${generateId()}`,
            categoryTitle: '',
            questions: []
        }, inquirerId, testId);
    }

    _getCard() {
        return this.props.categories.map(({categoryId, categoryTitle, questions}) => (
            <Card
                key={categoryId + ''}
                categoryTitle={categoryTitle}
                questions={questions || []}
            />
        ));
    }
}

Test.propTypes = {
    testTitle: PropTypes.string,
    limitTime: PropTypes.string,
    categories: PropTypes.array,
    handleAddCategory: PropTypes.func,
    handleSaveTest: PropTypes.func,
    testId: PropTypes.string,
    inquirerId: PropTypes.string
};


