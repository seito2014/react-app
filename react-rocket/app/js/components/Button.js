import React, {Component, PropTypes} from 'react';
import Data from '../constants/Data';

class Button extends Component {

    render() {

        const {value, onClick} = this.props;

        return (
            <div>
                {value}
                <button className="button" onClick={onClick}>
                    {Data.viewData[value].SELECT}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    value: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;