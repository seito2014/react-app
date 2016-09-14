import { combineReducers } from 'redux';
import reducerIncrement from './increment';
import reducerAnswer from './answer';

const reducers = combineReducers({
  reducerIncrement,
  reducerAnswer
});

export default reducers;
