import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import allReducers from './reducers/store';
//import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(
    allReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//registerServiceWorker();
