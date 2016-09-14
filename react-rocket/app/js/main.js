import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Button from './components/Button'
import reducer from './reducers'

const store = createStore(reducer);

const rootEl = document.getElementById('js-quiz');

const render = () => ReactDOM.render(
  <Button
    value={store.getState()}
    onClick={() => store.dispatch({ type: 'INCREMENT' })}
  />,
  rootEl
);

render();

store.subscribe(render);
