import React from 'react';
import data from '../constants/_Data.js';
import answerList from '../store/_AnswerTable.js';
import Action from '../action/_Action.js';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.index = props.index;
        this._countUp = props.countUp;
        // console.log(this._countUp);
    }

    handleClick(){
        // console.log(this);
        this.storeAnswer();
        // this.countUp();
        // console.log(this.state);
        this._countUp();
    }

    storeAnswer(){
        let userAnswer = this.props.text;

        if(userAnswer === data[0].ANSWER){
            answerList[0] = true;
        } else {
            answerList[0] = false;
        }
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick.bind(this)}>{this.props.text}</button>
        );
    }
}

export default Button;