import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/config'
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'swiper/css/swiper.css'
import 'react-confirm-alert/src/react-confirm-alert.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.lime.light.compact.css';
import './assets/dx.material.likuid-bo.css';
import 'react-image-crop/dist/ReactCrop.css';


ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
