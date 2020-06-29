import React, {createContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {SmurfContext} from './contexts/SmurfContext'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {mainReducer} from './reducers/mainReducer'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(mainReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /> </Provider>, document.getElementById("root"));
