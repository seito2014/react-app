import React from 'react';
import Data from '../constants/_Data';

class FontImg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={Data.viewData[0].QUESTION} width="320" height="60" alt=""/>
        );
    }
}

export default FontImg;