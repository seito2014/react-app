'use strict';

import $ from 'jquery';
window.$ = window.jQuery = $;

import fit from './module/_fit';
fit();

// import data from './_data.js';
// console.log(data[0].question);

//React
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonList from './module/_button-list';

let button = 'js-button';
ReactDOM.render(<ButtonList />, document.getElementById('js-buttons'));