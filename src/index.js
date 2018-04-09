import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Guess from './components/guess';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Guess />, document.getElementById('root'));
registerServiceWorker();
