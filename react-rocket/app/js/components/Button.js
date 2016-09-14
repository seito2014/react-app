import React, {Component, PropTypes} from 'react';
import Data from '../constants/Data';

class Button extends Component {

    render() {

        const {value, onButtonClick} = this.props;

        return (
            <div>
                {value}
                <button className="button" onClick={onButtonClick}>
                    {Data.viewData[value].SELECT}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    value: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default Button;