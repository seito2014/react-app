import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';

import constants from '../constants/Style.js';

const ButtonStyle = styled.button`
    display: block;
    width: 100%;
    color: #fff;
    background-color: #000;
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
    
    &:hover {
        opacity: .7;
    }
    
    ${props => props.fb && `
		background-color: ${constants.COLOR_FB};
		font-style: italic;
	`}
	${props => props.tw && `
		background-color: ${constants.COLOR_TW};
	`}
	${props => props.insta && `
		background-color: ${constants.COLOR_INSTA};
	`}
`;

class Button extends Component {

    render() {

        const {text, onClick} = this.props;

        return (
            <ButtonStyle onClick={onClick}>
                {text}
            </ButtonStyle>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;