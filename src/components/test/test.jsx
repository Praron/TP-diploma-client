import React from 'react';
// import PropTypes from 'prop-types';

import CourseHeader from '../course-header/course-header.jsx';
import Card from '../card/card.jsx';
import Button from '../button/button.jsx';

import './test.less';

export default class Test extends React.Component {
    render() {
        return (
            <div className='test'>

                <div className='test__header'>

                    <CourseHeader
                        titleLeft={'Tecт:'}
                        placeholderLeft={'Название теста'}
                        withPerion={false}
                    />

                </div>
                
                <div className='test__button'>
                    <Button
                        text={'Добавить категорию'}
                        style={'default'}
                    /> 
                </div>

                
                <div className='test__card'>

                    <Card/>

                </div>
                
            </div>
        );
    }
}

Test.propTypes = {};
