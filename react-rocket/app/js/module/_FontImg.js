import React from 'react';
import data from '../constants/_data.js';

class FontImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={data[0].question} width="320" height="60" alt=""/>
        );
    }
}

export default FontImg;