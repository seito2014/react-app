import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import reducer from './reducers';
import { addAnswering } from './actions/action';

const store = createStore(reducer);

const rootElm = document.getElementById('js-quiz');

const render = () => ReactDOM.render(
    <App
        rootValue={store.getState()}
        onButtonListClick={(e) => {
            store.dispatch({ type: 'INCREMENT' });
            store.dispatch(addAnswering(e.target.innerHTML));
            console.log(e.target.innerHTML);
        }}
    />,
    rootElm
);

render();

store.subscribe(render);
