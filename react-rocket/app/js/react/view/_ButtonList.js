import React from 'react';
import Button from './_Button';
import data from '../constants/_Data.js';

class ButtonList extends React.Component {
    constructor(props){
        super(props);
        this._countUp = props.countUp;
        this.index = props.index;
        console.log('this.index', this.index);
    }

    render() {

        let buttonArray = [];
        for (let i=0; i < 4; i++) {
            buttonArray.push(<li className="l-grid-item js-button"><Button index={this.index} countUp={this._countUp} className="button" text={data[this.index].SELECT[i]} /></li>);
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