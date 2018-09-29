import React from 'react';
import './course-header.less';
import Input from '../input/input.jsx';
import PropTypes from 'prop-types';

export default class CourseHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputTitle: this.props.valueLeft,
            endTime: this.props.endTime,
            startTime: this.props.startTime,
            limitTime: this.props.limitTime,
        };

        this.onChangeInput = this.onChangeInput.bind(this);
    }


    render() {
        const {titleLeft, withPeriod} = this.props;
        const {inputTitle} = this.state;

        const timeBlock = this._getTimeBlock(withPeriod);


        return (

            <div className='course-header'>

                <div className='course-header__title'>
                    <span className='course-header__text'>{titleLeft}&nbsp;</span>
                    <div className='course-header__input'>

                        <Input
                            type={'text'}
                            placeholder={'Введите название опросника'}
                            value={inputTitle}
                            handleChange={this.onChangeInput}
                            fieldName={'inputTitle'}
                        />

                    </div>
                </div>

                {timeBlock}

            </div>
        );
    }

    onChangeInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    _getTimeBlock(withPeriod) {

        const {endTime, startTime, limitTime} = this.props;

        console.log(endTime, startTime);

        if (withPeriod) {
            return (
                <div className='course-header__time'>

                    <span className='course-header__text'>Период: c&nbsp;</span>

                    <Input
                        type={'date'}
                        value={startTime ? startTime.substr(0, 10) : ''}
                        handleChange={this.onChangeInput}
                        fieldName={'startTime'}
                    />

                    <span className='course-header__text'>&nbsp;до&nbsp;</span>

                    <Input
                        type={'date'}
                        value={endTime ? endTime.substr(0, 10) : ''}
                        handleChange={this.onChangeInput}
                        fieldName={'endTime'}
                    />

                </div>
            );
        }

        return (
            <div className='course-header__time'>
                <span className='course-header__text'>Лимит времени:&nbsp;</span>

                <Input
                    type={'time'}
                    value={limitTime}
                    handleChange={this.onChangeInput}
                    fieldName={'limitTime'}
                />
            </div>
        );
    }
}

CourseHeader.propTypes = {
    titleLeft: PropTypes.string.isRequired,
    valueLeft: PropTypes.string.isRequired,
    withPeriod: PropTypes.bool,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    limitTime: PropTypes.string
};
