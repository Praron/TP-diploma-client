import React from 'react';
import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Card from '../card/card.jsx';
import Button from '../button/button.jsx';

import './test.less';

//TODO убрать state, добавить props

export default class Test extends React.Component {
    constructor(props) {
        super(props);

        this.handleAddCategory = this.handleAddCategory.bind(this);

        this.state = {
            categories: this.props.categories,
        };
    }

    render() {
        const {testTitle, timeLimit} = this.props;
        const cardBlock = this._getCard();

        return (
            <div className='test'>

                <div className='test__header'>

                    <CourseHeader
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
                        handleClick={this.handleAddCategory}
                    />
                    <Button
                        text={'Сохранить'}
                        style={'success'}
                    />
                </div>

                <div className='test__card'>

                    {cardBlock}

                </div>
                
            </div>
        );
    }

    handleAddCategory() {
        // this.state.categories.push({
        //     categoryTitle: '',
        //     questions: []
        // });

        this.setState({
            categories: this.state.categories.concat({
                categoryTitle: '',
                questions: []
            })
        });

    }

    _getCard() {
        return this.state.categories.map(({categoryId, categoryTitle, questions}) => (
           <Card
                key={categoryId}
                categoryTitle={categoryTitle}
                questions={questions || []}
           />
        ));
    }
}

Test.propTypes = {
    testTitle: PropTypes.string,
    timeLimit: PropTypes.string,
    categories: PropTypes.array
};


