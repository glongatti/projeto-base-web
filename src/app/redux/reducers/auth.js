import { AuthActions } from '../actions';

export default (
  state = { authenticated: true },
  action,
) => {
  switch (action.type) {
    case AuthActions.ACTION_AUTH_LOGIN:
      return {
        authenticated: true,
      };
    case AuthActions.ACTION_AUTH_LOGOUT:
      return {};
    default:
      return state;
  }
};

export function isAuthenticated(state) {
  return state.auth.authenticated;
}
