import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import reducers from "./reducers";
import Routers from "./Routes";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "/api"
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routers)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector("#root"));