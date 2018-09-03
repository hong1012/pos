import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Routers from './router';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Routers />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
