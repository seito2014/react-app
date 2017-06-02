import React, {Component, PropTypes} from 'react';
import styled from '../../../node_modules/styled-components';

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

const COLOR_MAIN = '#ffbb4d';

export default Button = styled.button`
    display: block;
    width: 100%;
    color: #fff;
    background-color: ${COLOR_MAIN};
    border-radius: 5px;
    padding: 15px;
    font-size: 20px;
    font-weight: bold;
    line-height: 1;
`;