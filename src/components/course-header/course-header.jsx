import React from 'react';
import './course-header.less';
import Input from '../input/input.jsx';
import PropTypes from 'prop-types';

export default class CourseHeader extends React.Component {

    render() {
        const {titleLeft, placeholderLeft, withPeriod} = this.props;
        const timeBlock = this._getTimeBlock(withPeriod);

        return (

            <div className='course-header'>

                <div className='course-header__title'>
                    <span className='course-header__text'>{titleLeft}&nbsp;</span>
                    <div className='course-header__input'>

                        <Input
                            type={'text'}
                            placeholder={placeholderLeft}
                        />

                    </div>
                </div>

                {timeBlock}

            </div>
        );
    }


    _getTimeBlock(withPeriod) {
        if (withPeriod) {
            return (
                <div className='course-header__time'>

                    <span className='course-header__text'>Период: c&nbsp;</span>

                    <Input
                        type={'date'}
                        // value={}
                    />

                    <span className='course-header__text'>&nbsp;до&nbsp;</span>

                    <Input
                        type={'date'}
                        // value={}
                    />

                </div>
            );
        }

        return (
            <div className='course-header__time'>
                <span className='course-header__text'>Лимит времени:&nbsp;</span>

                <Input
                    type={'time'}
                />
            </div>
        );
    }

}

CourseHeader.propTypes = {
    titleLeft: PropTypes.string.isRequired,
    placeholderLeft: PropTypes.string.isRequired,
    withPeriod: PropTypes.bool,
};
