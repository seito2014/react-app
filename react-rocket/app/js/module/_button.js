import React from 'react';
import data from './_data.js';
import answerList from './_answer-list.js';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        let userAnswer = this.props.text;

        if(userAnswer === data[0].answer){
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