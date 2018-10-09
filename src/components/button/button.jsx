import React from 'react';
import PropTypes from 'prop-types';
import './button.less';

export default class Button extends React.Component {
    render() {
        let {text, handleClick,isDisabled, isLong, size, style, type} = this.props;

        const sizeStyle = this._getSize(size);
        const typeStyle = this._getStyle(style);
        const longStyle = this._getLong(isLong);

        const className = `${this.props.className || ''} button ${sizeStyle} ${typeStyle} ${longStyle}`;

        return (
            <button
                className={className}
                onClick={handleClick}
                disabled={isDisabled}
                type={type ? type : 'text'}
            >
                <span className='button__text'>{text}</span>
            </button>
        );
    }

    _getSize(size) {
        switch (size) {
            case 'small':
                return '_small';
            case 'medium':
                return '_medium';
            case 'large':
                return '_large';
            default:
                return '_medium';
        }
    }

     _getLong(isLong) {
        return (isLong ? '_long' : ''); 
    }

    _getStyle(style) {
        switch (style) {
            case 'default':
                return '_default';
            case 'danger':
                return '_danger';
            case 'success':
                return '_success';
            case 'link':
                return '_link';
            case 'long':
                return '_long';
            case 'hidden':
                return '_hidden';
            default:
                return '_default';
        }
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    isDisabled: PropTypes.bool,
    size: PropTypes.string,
    style: PropTypes.string,
    type: PropTypes.string
};

