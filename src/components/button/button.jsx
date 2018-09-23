import React from 'react';
import PropTypes from 'prop-types';
import './button.less';

export default class Button extends React.Component {
    render() {
        const {text, handleClick, size, type} = this.props;

        const sizeStyle = this._getSize(size);
        const typeStyle = this._getStyle(type);
        const style = `button ${sizeStyle} ${typeStyle}`;

        return (
            <div className={style} onClick={handleClick} >
                <span className='button__text'>{text}</span>
            </div>
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

    _getStyle(style) {
        switch (style) {
            case 'default':
                return '_default';
            case 'danger':
                return '_danger';
            case 'success':
                return '_success';
            default:
                return '_default';
        }
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    size: PropTypes.string,
    type: PropTypes.string
};

