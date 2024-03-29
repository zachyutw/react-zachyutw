import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import './index.scss';
import { Provider as GlobalProvider } from './contexts/Global/GlobalContext';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import disabledHoverEffectInMobile from './utils/disabledHoverEffectInMobile';
import displayLocalStorageInfo from './utils/displayLocalStorageInfo';
displayLocalStorageInfo();
disabledHoverEffectInMobile();

ReactDOM.render(
  <BrowserRouter>
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
