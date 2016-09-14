import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers';
import { answer } from './actions/action';

const store = createStore(reducer);

const rootElm = document.getElementById('js-quiz');

const render = () => ReactDOM.render(
    <div>
    <App
        rootValue={store.getState().reducerIncrement}
        onButtonListClick={(e) => {
            store.dispatch({ type: 'INCREMENT' });
            store.dispatch(answer(e.target.innerHTML));
            //console.log(e.target.innerHTML);
            console.log(store.getState().reducerAnswer);
        }}
    /></div>,
    rootElm
);

render();

store.subscribe(render);
