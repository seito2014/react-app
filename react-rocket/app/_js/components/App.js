import React from 'react';
import Question from './Question';
import ButtonList from './ButtonList';

const App = () => (
  <div>
    <Question />
    <ButtonList onClick={ () => this.props.handleClick() } />
  </div>
);

export default App;
