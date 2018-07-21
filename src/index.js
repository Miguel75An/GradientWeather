import React from 'react';
import ReactDOM from 'react-dom';
import WeatherMain from './WeatherMain';
// import Logo from './Logo'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Logo />, document.getElementById('root'));
ReactDOM.render(<WeatherMain />, document.getElementById('root'));
registerServiceWorker();
