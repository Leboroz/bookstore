import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import BookAPI from './redux/BookAPI';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

BookAPI.setBook({ id: 'item3', title: 'lololo', genre: 'Action' }).then((res) =>
  console.log(res.text())
);

// BookAPI.deleteBook('item3');
