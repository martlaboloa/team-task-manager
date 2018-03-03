import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import configureStore from './configureStore'
import reducer from './reducer'

const store = configureStore(
    undefined,
    applyMiddleware(),
    reducer,
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);

registerServiceWorker();
