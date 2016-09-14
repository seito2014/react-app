import React, { PropTypes } from 'react';
import Data from '../constants/Data';

const FontImg = ({ index }) => (

    <div className="l-quiz-question">
        <dl className="question">
            <dt>Q{index}.What font is this？</dt>
            <dd>
                <img src={Data.viewData[index].QUESTION} width="320" height="60" alt="Hello world!"/>
            </dd>
        </dl>
    </div>
);

export default FontImg;
