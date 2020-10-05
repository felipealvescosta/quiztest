import React from 'react';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import Routes from './routes.js';

import store from './store';

import '../src/styles/main.css';
Modal.setAppElement('#root');

const App = () => {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    );
};

export default App;
