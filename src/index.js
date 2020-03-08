import './styles/scss/index.scss';

import React  from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import moment from 'moment-timezone';
import jstz from 'jstimezonedetect';
import SecureLS from 'secure-ls';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n';

import Config from './app/config/app.config';
import i18nDictionary from './i18n';
import * as AuthActions from './app/redux/actions/auth';
import initalizeRedux from './app/redux';
import Routes from './app/routes';

const redux = initalizeRedux();
const tz = jstz.determine();
const timezone = tz.name() || Config.timezone;

export const axiosInstance = axios.create();
export const ls = new SecureLS({ encodingType: 'aes' });

try {

  let language = Config.language;
  if (!i18nDictionary[language]) ({ language } = Config);

  syncTranslationWithStore(redux);
  redux.dispatch(loadTranslations(i18nDictionary));
  redux.dispatch(setLocale(language));

  moment.tz.setDefault(timezone);
  moment.locale(language);

  axiosInstance.interceptors.response.use(
    response => response,
    async (err) => {

      if (err.response.status === 401) {
        redux.dispatch(AuthActions.cleanAuth());
      }

      return Promise.reject(err);
    },
  );
}

catch (err) {
  // Redirect to error page
}
finally {
  const launchLoader = document.getElementById('loading');
  launchLoader.classList.add('hide');
}

ReactDOM.render(
  <Provider store={redux}>
    <Routes/>
  </Provider>,
  document.getElementById('root'),
);
