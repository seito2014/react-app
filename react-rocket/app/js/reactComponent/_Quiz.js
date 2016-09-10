import React from 'react';
import ButtonList from './_ButtonList';
import FontImg from './_FontImg';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
    }

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