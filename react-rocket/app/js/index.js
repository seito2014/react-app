'use strict';

import $ from 'jquery';
window.$ = window.jQuery = $;

import fit from './module/_fit';
fit();

//React
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './module/_button';

let button = 'js-button';

let windowElm = document.getElementsByClassName(button);
let windowElmLength = windowElm.length;

function renderElm(elm){
    for(let i = 0; i < windowElmLength; i++){
        let targetName = 'target="#js-area-' + i + '"';
        ReactDOM.render(<Button className="button" />, elm[i]);
    }
}
renderElm(document.getElementsByClassName(button));