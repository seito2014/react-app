import React, {Component, PropTypes} from 'react';

class Button extends Component {

    render() {

        const {text, onClick} = this.props;

        return (
            <button className="button" onClick={onClick}>
                {text}
            </button>
        )
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;