import React from 'react';
import ButtonList from './_ButtonList';
import Button from './_Button';
import FontImg from './_FontImg';
import data from '../constants/_Data';
import Store from '../store/_Store';

class Quiz extends React.Component {
    constructor() {
        super();
    }

    getInitialState(){
        return Store.getIndex();
    }

    // _countUp(){
    //     // console.log(this.index);
    //     this.index++;
    //     console.log(this.index);
    //     // this.setState({
    //     //     index: this.state.index + 1
    //     // });
    // }

    render() {

        return (
            <div>
                <div className="l-quiz-question">
                    <dl className="question">
                        <dt>Q1.What font is this？</dt>
                        <dd>
                            <FontImg />
                        </dd>
                    </dl>
                </div>
                <div className="l-quiz-buttons">
                    <ButtonList />
                </div>
            </div>
        );
    }
}

export default Quiz;