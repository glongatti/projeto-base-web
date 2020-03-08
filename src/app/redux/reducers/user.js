import { UserActions } from '../actions';

export default (
  state = null,
  action,
) => {
  switch (action.type) {
    case UserActions.ACTION_SAVE_USER:
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export function getUser(state) {
  return state.user;
}
