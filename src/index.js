import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"; // to use connect
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
// applyMiddleware for thunk,
// compose to be able to use redux developer tool
// createStore to create the redux store

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from "./redux/reducers/reducers";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(reducer, null, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
