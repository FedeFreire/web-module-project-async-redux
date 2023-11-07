import { combineReducers } from 'redux';
import factReducer from './factReducer';
import catImageReducer from './catImageReducer';

export default combineReducers({
  factData: factReducer,
  catImage: catImageReducer,
});
