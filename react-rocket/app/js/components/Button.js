import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';

import constants from '../constants/Style.js';

class Button extends Component {

    render() {

        const {text, onClick} = this.props;

        return (
            <Button className="button" onClick={onClick}>
                {text}
            </Button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
// = styled.button`
//     display: block;
//     width: 100%;
//     color: #fff;
//     background-color: ${constants.COLOR_FB};
//     border-radius: 5px;
//     padding: 15px;
//     font-size: 20px;
//     font-weight: bold;
//     line-height: 1;
// `;