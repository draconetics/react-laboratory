import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import rootReducer from './redux/reducer';
import {Provider} from 'react-redux';

import Main from './Components/Main';
import './styles/stylesheet.css';
import App from './Components/App';


const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));

