import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './application/App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';
import {routerMiddleware} from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from "react-redux";
// import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
const sagaMiddleWare =createSagaMiddleware();

export const store = createStore(
    rootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            sagaMiddleWare,
        )
    )
)

sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
serviceWorker.unregister();