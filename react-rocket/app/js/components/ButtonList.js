import React, {Component, PropTypes} from 'react';
import Data from '../constants/Data';
import Button from './Button';

class ButtonList extends Component {

    render() {

        const {value, onButtonClick} = this.props;

        const buttonArray = (counter) => {
            let array = [];

            for (let i = 0; i < Data.viewData.length + 1; i++) {
                array.push(
                    <li key={i} className="l-grid-item js-button">
                        <Button
                            text={Data.viewData[counter].SELECT[i]}
                            onClick={onButtonClick}
                        />
                    </li>
                );
            }

            return array;
        };

        return (
            <div className="l-quiz-buttons">
                <div className="button-list l-grid l-grid-col2">
                    <ul className="button-list-inner l-grid-inner">
                        {buttonArray(value)}
                    </ul>
                </div>
            </div>
        )
    }
}

ButtonList.propTypes = {
    value: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default ButtonList;