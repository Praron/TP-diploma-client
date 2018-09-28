import React from 'react';
import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Card from '../card/card.jsx';
import Button from '../button/button.jsx';

import './test.less';

export default class Test extends React.Component {
    render() {
        const {testTitle, timeLimit} = this.props;
        const cardBlock = this._getCard();

        return (
            <div className='test'>

                <div className='test__header'>

                    <CourseHeader
                        titleLeft={'Tecт:'}
                        placeholderLeft={testTitle || 'Название теста'}
                        withPerion={false}
                        limitTime={timeLimit}
                    />

                </div>
                
                <div className='test__button'>
                    <Button
                        text={'Добавить категорию'}
                        style={'default'}
                    /> 
                </div>

                <div className='test__card'>

                    {cardBlock}

                </div>
                
            </div>
        );
    }

    _getCard() {
        return this.props.categories.map(({categoryId, categoryTitle, questions}) => (
           <Card
                key={categoryId}
                categoryTitle={categoryTitle}
                questions={questions}
           />
        ));
    }
}

Test.propTypes = {
    testTitle: PropTypes.string,
    timeLimit: PropTypes.string,
    categories: PropTypes.array
};
