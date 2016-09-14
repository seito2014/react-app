import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer);

const rootEl = document.getElementById('js-quiz');

const render = () => ReactDOM.render(
    <App
        rootValue={store.getState()}
        onButtonListClick={() => store.dispatch({ type: 'INCREMENT' })}
    />,
    rootEl
);

render();

store.subscribe(render);
