import React, {Component, PropTypes} from 'react';
import Data from '../constants/Data';

class Question extends Component {

    render() {

        const {value} = this.props;

        return (
            <div className="l-quiz-question">
                <dl className="question">
                    <dt>Q{value + 1}.What font is this？</dt>
                    <dd>
                        <img src={Data.viewData[value].QUESTION} width="320" height="60" alt="Hello world!"/>
                    </dd>
                </dl>
            </div>
        )
    }
}

Question.propTypes = {
    value: PropTypes.number.isRequired
};

export default Question;