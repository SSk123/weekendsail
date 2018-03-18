import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/js/App';
import registerServiceWorker from './app/sw/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
