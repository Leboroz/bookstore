import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
