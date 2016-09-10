import React from 'react';
import Button from './_button';
import data from './_data.js';
// console.log(data[0].question);

class ButtonList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buttonArray = [];
        for (let i=0; i < 4; i++) {
            buttonArray.push(<li className="l-grid-item js-button"><Button className="button" text={data[0].select[i]} /></li>);
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