import { combineReducers, createStore } from 'redux';
import snackbarReducer from './ducks/snackbar';
import searchingReducer from './ducks/searching';
import disableReducer from './ducks/disableDelete';
import fetchApiReducer from './ducks/fetchApi';

const reducer = combineReducers({
  snackbar: snackbarReducer,
  searching: searchingReducer,
  disableDelete: disableReducer,
  fetchApi: fetchApiReducer,
});

const store = createStore(reducer, {});

export default store;
