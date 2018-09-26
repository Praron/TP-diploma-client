import React from 'react';
import PropTypes from 'prop-types';

const _getSize = size => {
    switch (size) {
        case 'small':
            return '24px';
        case 'medium':
            return '32px';
        case 'large':
            return '64px';
        default:
            return '32px';
    }
};

const Icon = ({size}) => {
    const iconSize = _getSize(size);

    return (
        <svg xmlns='http://www.w3.org/2000/svg'
             width={iconSize}
             height={iconSize}
             fill='orange'
             viewBox='0 0 612 612'>
            <path d='M535.5,229.5h-153v-153C382.5,34.253,348.247,0,306,0s-76.5,34.253-76.5,76.5v153h-153C34.253,229.5,0,263.753,0,306
		s34.253,76.5,76.5,76.5h153v153c0,42.247,34.253,76.5,76.5,76.5s76.5-34.253,76.5-76.5v-153h153c42.247,0,76.5-34.253,76.5-76.5
		S577.747,229.5,535.5,229.5z M535.5,344.25H344.25V535.5c0,21.133-17.117,38.25-38.25,38.25c-21.133,0-38.25-17.117-38.25-38.25
		V344.25H76.5c-21.133,0-38.25-17.117-38.25-38.25c0-21.133,17.117-38.25,38.25-38.25h191.25V76.5
		c0-21.133,17.117-38.25,38.25-38.25c21.133,0,38.25,17.136,38.25,38.25v191.25H535.5c21.133,0,38.25,17.117,38.25,38.25
		C573.75,327.133,556.633,344.25,535.5,344.25z'/>
        </svg>

    );
};

Icon.propTypes = {
    size: PropTypes.string.isRequired,
};

export default Icon;
