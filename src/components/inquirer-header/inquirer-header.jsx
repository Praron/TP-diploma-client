import React from 'react';
import './inquirer-header.less';
import Input from '../input/input.jsx';
import PropTypes from 'prop-types';

export default class InquirerHeader extends React.Component {
    render() {
        const {titleLeft, withPeriod, handlerHeaderInput, valueLeft} = this.props;

        const timeBlock = this._getTimeBlock(withPeriod);

        return (

            <div className='course-header'>

                <div className='course-header__title'>
                    <span className='course-header__text'>{titleLeft}&nbsp;</span>
                    <div className='course-header__input'>

                        <Input
                            type={'text'}
                            placeholder={'Введите название опросника'}
                            value={valueLeft}
                            handleChange={handlerHeaderInput}
                            fieldName={'valueLeft'}
                        />

                    </div>
                </div>

                {timeBlock}

            </div>
        );
    }

    _getTimeBlock(withPeriod) {

        const {endTime, startTime, limitTime, handlerHeaderInput} = this.props;

        if (withPeriod) {
            return (
                <div className='course-header__time'>

                    <span className='course-header__text'>Период: c&nbsp;</span>

                    <Input
                        type={'date'}
                        value={startTime ? startTime.substr(0, 10) : ''}
                        handleChange={handlerHeaderInput}
                        fieldName={'startTime'}
                    />

                    <span className='course-header__text'>&nbsp;до&nbsp;</span>

                    <Input
                        type={'date'}
                        value={endTime ? endTime.substr(0, 10) : ''}
                        handleChange={handlerHeaderInput}
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
                    handleChange={handlerHeaderInput}
                    fieldName={'limitTime'}
                />
            </div>
        );
    }
}

InquirerHeader.propTypes = {
    titleLeft: PropTypes.string.isRequired,
    valueLeft: PropTypes.string.isRequired,
    withPeriod: PropTypes.bool,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
    limitTime: PropTypes.string,
    handlerHeaderInput: PropTypes.func
};
