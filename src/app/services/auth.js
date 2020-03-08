import { I18n } from 'react-redux-i18n';
import StorageService from './storage';

function isAuthenticated() {
  const auth = StorageService.get('auth');
  return (auth && auth.token);
}

function get() {
  if (isAuthenticated()) {
    return StorageService.get('auth');
  }
}

function create({ token }) {
  StorageService.set(
    'auth',
    { token },
  );
}

function reset() {
  StorageService.reset('auth');
}

function redirectToLogin() {
  window.location.href = I18n.t('routes.login.url');
}

export default {
  get,
  isAuthenticated,
  create,
  reset,
  redirectToLogin,
};
