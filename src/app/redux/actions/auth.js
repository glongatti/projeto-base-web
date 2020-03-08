import { I18n } from 'react-redux-i18n';
import AuthRequests from '../../api/auth';
import AuthService from '../../services/auth';

import {
  addLoading,
  removeLoading,
} from './loading';
import * as UserActions from './user';

export const ACTION_AUTH_LOGIN = 'LOGIN';
export const ACTION_AUTH_LOGOUT = 'LOGOUT';

export const resetAuthentication = () => ({
  type: ACTION_AUTH_LOGOUT,
});

export const saveAuthentication = authData => ({
  type: ACTION_AUTH_LOGIN,
  auth: authData,
});

export const cleanAuth = () => async (dispatch) => {
  dispatch(resetAuthentication());
  dispatch(UserActions.cleanUser());
  AuthService.reset();
  AuthService.redirectToLogin();
};

export const authenticate = (
  username,
  password,
) => async (dispatch) => {
  dispatch(addLoading());
  try {
    const auth = await AuthRequests.authenticate(
      username,
      password,
    );
    AuthService.create(auth);
    dispatch(saveAuthentication(auth));
    dispatch(UserActions.saveUser(auth.user));
  }
  catch (err) {
    throw new Error(I18n.t('error.userInvalid'));
  }
  finally {
    dispatch(removeLoading());
  }
};

export const logout = () => async (dispatch) => {
  dispatch(addLoading());
  dispatch(cleanAuth());
  dispatch(removeLoading());
};
