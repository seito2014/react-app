import React, { PropTypes } from 'react';
import Data from '../constants/Data';
import Button from './Button';

const ButtonList = ({ buttonLength, index, onButtonClick }) => {

    const buttonArray = () => {
        let array = [];

        for (let i = 0; i < buttonLength; i++) {
            array.push(
                <li className="l-grid-item js-button">
                    <Button
                        className="button"
                        text={Data.viewData[index].SELECT[i]}
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
                    {buttonArray}
                </ul>
            </div>
        </div>
    );
};

ButtonList.propTypes = {
    buttonLength: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func.isRequired
};

export default ButtonList
