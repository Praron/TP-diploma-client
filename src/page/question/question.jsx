import React from 'react';
import './question.less';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
    render() {
        console.log(this.props.match);
        return <div className='question'>
            question page
        </div>;
    }

    back(e) {
        e.stopPropagation();
        history.goBack();
    }
}

Question.propTypes = {
    match: PropTypes.object,
};

