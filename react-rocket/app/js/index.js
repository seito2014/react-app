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
import ButtonList from './reactComponent/_ButtonList';
import FontImg from './reactComponent/_FontImg';

ReactDOM.render(<ButtonList />, document.getElementById('js-buttons'));
ReactDOM.render(<FontImg />, document.getElementById('js-img'));