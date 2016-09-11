import React from 'react';
import data from '../constants/_data.js';
import answerList from '../constants/_answerList.js';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        console.log(this);
        this.storeAnswer();
    }

    storeAnswer(){
        let userAnswer = this.props.text;

        if(userAnswer === data[0].ANSWER){
            answerList[0] = true;
        } else {
            answerList[0] = false;
        }
        console.log(answerList);
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick.bind(this)}>{this.props.text}</button>
        );
    }
}

export default Button;