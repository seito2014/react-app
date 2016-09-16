import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers';
import { answer } from './actions/action';
import Data from './constants/Data';

const store = createStore(reducer);

let judge = (val1, val2, text, callback)=> {
    window.alert(text);
    if(val1 === val2 - 1){
        callback();
    }
};

let moveComp = () => {
    window.location.href = 'comp.html';
};

const rootElm = document.getElementById('js-quiz');

const render = () => ReactDOM.render(
    <div>
    <App
        rootValue={store.getState().reducerIncrement}
        onButtonListClick={(e) => {
            store.dispatch({ type: 'INCREMENT' });

            let count = store.getState().reducerIncrement - 1;

            let userAnswer = answer(e.target.innerHTML).answer;
            let correctAnswer = Data.viewData[count].ANSWER;
            let result = (userAnswer === correctAnswer) ? "True! :)" : "False! :(";

            judge(
                count,
                Data.viewData.length,
                result,
                moveComp
            );

        }}
    /></div>,
    rootElm
);

render();

store.subscribe(render);
