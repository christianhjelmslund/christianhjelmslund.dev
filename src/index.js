import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"; // to use connect
import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import postsReducer from "./redux/reducers/postsReducer";

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const rootReducer = combineReducers(({
    posts: postsReducer,
}))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();