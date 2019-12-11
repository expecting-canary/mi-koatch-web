import './index.scss';
import 'typeface-roboto';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import { LangageContext } from './common/langage/context';
import { fr } from './common/langage/fr';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // tslint:disable-next-line: jsx-wrap-multiline
  <LangageContext.Provider value={fr}>
    <App />
  </LangageContext.Provider>,
  document.getElementById( 'root' ),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
