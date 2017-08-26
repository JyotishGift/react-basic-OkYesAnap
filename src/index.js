import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './theme/index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

const render = Component => ReactDOM.render(
    <Router>
        <App />
    </Router>, document.getElementById('root'));
render(App);

if(module.hot){
    console.log('Updated');
    module.hot.accept('./App', () => render(App));
}
registerServiceWorker();
