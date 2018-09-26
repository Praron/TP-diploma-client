import './add-button.less';

import React from 'react';
import PropTypes from 'prop-types';

import './add-button.less';
//TODO добавлять из svgstore
import Icon from './icon/icon.jsx';

export default class AddButton extends React.Component {
    render() {
        const {handleClick} = this.props;

        return (
            <div className='add-button' onClick={handleClick}>
                <div className='add-button__icon'>
                    <Icon {...this.props}/>
                </div>
            </div>
        );
    }
}

AddButton.propTypes = {
    handleClick: PropTypes.func,
};

