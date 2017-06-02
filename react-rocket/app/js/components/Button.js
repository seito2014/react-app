import React, {Component, PropTypes} from 'react';

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