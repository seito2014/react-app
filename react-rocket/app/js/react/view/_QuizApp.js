import React from 'react';
import ButtonList from './_ButtonList';
import Button from './_Button';
import FontImg from './_FontImg';
import data from '../constants/_Data.js';

class Quiz extends React.Component {
    constructor() {
        super();

        this.state = {
            index: 0
        };
    }

    // getInitialState(){
    //     return {
    //         index: 0
    //     };
    // }

    _countUp(){
        // console.log(this.index);
        this.index++;
        console.log(this.index);
        // this.setState({
        //     index: this.state.index + 1
        // });
    }

    render() {

        const { index } = this.state;

        return (
            <div>
                <div className="l-quiz-question">
                    <dl className="question">
                        <dt>Q{index + 1}.What font is this？</dt>
                        <dd>
                            <FontImg />
                        </dd>
                    </dl>
                </div>
                <div className="l-quiz-buttons">
                    <ButtonList index={index} countUp={this._countUp} />
                </div>
            </div>
        );
    }
}

export default Quiz;