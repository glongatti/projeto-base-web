import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { i18nReducer } from 'react-redux-i18n';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';
import userReducer from './reducers/user';
import loadingReducer from './reducers/loading';

export default () => {
  const store = createStore(
    combineReducers(
      {
        i18n: i18nReducer,
        auth: authReducer,
        loading: loadingReducer,
        user: userReducer,
      },
    ),
    compose(
      applyMiddleware(thunk),
    ),
  );

  return store;
};
