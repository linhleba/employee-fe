import { combineReducers, createStore } from 'redux';
import snackbarReducer from './ducks/snackbar';
import searchingReducer from './ducks/searching';

const reducer = combineReducers({
  snackbar: snackbarReducer,
  searching: searchingReducer,
});

const store = createStore(reducer, {});

export default store;
