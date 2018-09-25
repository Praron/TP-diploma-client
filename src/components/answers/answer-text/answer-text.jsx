import React from 'react';
import PropTypes from 'prop-types';

import './answer-text.less';

export default class AnswerText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Введите текстовый ответ'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.handleAnswersText(event.target.value);
    }

    render() {
        return (
            <div className='answer-text'>
                <textarea
                    value={this.state.value} 
                    onChange={this.handleChange}
                    className={'answer-text__textarea'}
                />
            </div>
        );
    }
}

AnswerText.propTypes = {
    handleAnswersText: PropTypes.func,
};
