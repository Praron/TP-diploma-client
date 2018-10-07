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

        this.clickAddCategory = this.clickAddCategory.bind(this);
    }

    render() {
        const {testTitle, timeLimit} = this.props;
        const cardBlock = this._getCard();

        return (
            <div className='test'>

                <div className='test__header'>

                    <InquirerHeader
                        titleLeft={'Tecт:'}
                        valueLeft={testTitle || 'Название теста'}
                        withPerion={false}
                        limitTime={timeLimit}
                    />

                </div>

                <div className='test__button'>
                    <Button
                        text={'Добавить категорию'}
                        style={'default'}
                        handleClick={this.clickAddCategory}
                    />
                    <Button
                        text={'Сохранить'}
                        style={'success'}
                    />
                </div>

                <div className='test__card'>

                    {cardBlock}

                </div>
                <Button
                    text={'Сохранить данные теста'}
                    style={'success'}
                />
            </div>
        );
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
    timeLimit: PropTypes.string,
    categories: PropTypes.array,
    handleAddCategory: PropTypes.func,
    testId: PropTypes.string,
    inquirerId: PropTypes.string
};


