import React from 'react';
import Button from './_Button';
import Data from '../constants/_Data.js';

class ButtonList extends React.Component {
    constructor(props){
        super(props);
        this._countUp = props.countUp;
    }

    render() {

        let buttonArray = [];
        for (let i=0; i < 4; i++) {
            buttonArray.push(<li className="l-grid-item js-button"><Button className="button" text={Data.viewData[0].SELECT[i]} /></li>);
        }
        return (
            <div className="button-list l-grid l-grid-col2">
                <ul className="button-list-inner l-grid-inner">
                    {buttonArray}
                </ul>
            </div>
        );
    }
}

export default ButtonList;