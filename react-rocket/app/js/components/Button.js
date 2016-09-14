import React, { PropTypes } from 'react';

const Button = ({ onClick, text }) => (

    <button className="button" onClick={onClick}>
        {text}
    </button>
);

Button.propTypes = {
    index: PropTypes.number.isRequired
};

export default Button;
