import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
//compose lets you use several store enhancers
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
//the Provider binds the store to the App
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';

//applyMiddleWare(thunk) is a store enhancer, can return a function inside the actionCreators which can interact with the database
const store = createStore(rootReducer, 
    compose (
        //first store enhancer
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
