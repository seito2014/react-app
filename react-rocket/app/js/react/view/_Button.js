import React from 'react';
import Data from '../constants/_Data.js';
import Action from '../action/_Action.js';

class Button extends React.Component {
    constructor(props) {
        super(props);
        // this.index = props.index;
        // this._countUp = props.countUp;
        this.state = {
            index: this.props.index
        };
    }
    
    handleClick(){
        this.storeAnswer();
        this.setState({
            index: this.state.index + 1
        });
        console.log(this.state.index);
    }

    storeAnswer(){
        let userAnswer = this.props.text;

        if(userAnswer === Data.viewData[0].ANSWER){
            Data.answerTable[0] = true;
        } else {
            Data.answerTable[0] = false;
        }
    }

    render() {
        return (
            <button className={this.props.className} onClick={this.handleClick.bind(this)}>{this.props.text}</button>
        );
    }
}

export default Button;