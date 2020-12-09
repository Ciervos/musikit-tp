import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {initializeStore} from './store';
import {Provider} from 'react-redux';
import Home from './pages/Home/index';
import Dashboard from './pages/Dashboard/index';
import Playlist from './pages/Playlist/index';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
let store = initializeStore();

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Route exact path="/" component={Home}/>
    <Route exact path="/dashboard" component={Dashboard}/> 
    <Route path="/playlist/:id" component={Playlist}/> 
  </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
