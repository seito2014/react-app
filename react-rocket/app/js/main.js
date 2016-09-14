import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import ButtonList from './components/ButtonList'
import reducer from './reducers'

const store = createStore(reducer);

const rootEl = document.getElementById('js-quiz');

const render = () => ReactDOM.render(
  <ButtonList
    value={store.getState()}
    onButtonClick={() => store.dispatch({ type: 'INCREMENT' })}
  />,
  rootEl
);

render();

store.subscribe(render);
