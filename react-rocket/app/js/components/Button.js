import React, {Component, PropTypes} from 'react';
import Data from '../constants/Data';

class Button extends Component {

    render() {

        const {value, onProgress} = this.props;

        return (
            <div>
                {value}
                <button className="button" onClick={onProgress}>
                    {Data.viewData[value].SELECT}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    value: PropTypes.number.isRequired,
    onProgress: PropTypes.func.isRequired
};

export default Button;