import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';

import { createStore } from 'redux';

import bookReducerFactory from './reducers/books';

const initialState = {
  '1': {
    id: '1',
    title: 'Learning Physics',
    category: 'Learning',
  },
  '2': {
    id: '2',
    title: 'Believers',
    category: 'Action',
  },
  '3': {
    id: '3',
    title: 'Moby Dick',
    category: 'Sci-Fi',
  },
};

const bookReducer = bookReducerFactory(initialState);
const bookStore = createStore(bookReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={bookStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
