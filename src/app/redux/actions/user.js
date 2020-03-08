import {
  addLoading,
  removeLoading,
} from './loading';
import UserRequests from '../../api/user';
import * as AuthActions from './auth';

export const ACTION_SAVE_USER = 'SAVE_USER';
export const ACTION_CLEAN_USER = 'CLEAN_USER';

export const saveUser = user => ({
  type: ACTION_SAVE_USER,
  user,
});

export const cleanUser = () => ({
  type: ACTION_CLEAN_USER,
  user: null,
});

export const getUser = () => async (dispatch) => {
  dispatch(addLoading());
  try {
    const user = await UserRequests.getUser();
    dispatch(saveUser(user));
  }
  catch (err) {
    dispatch(AuthActions.cleanAuth());
  }
  finally {
    dispatch(removeLoading());
  }
};

export const uploadFile = (file) => async (dispatch) => {
  dispatch(addLoading());
  try {
    const formData = new FormData();
    formData.append(
      'file',
      file,
    );
    await UserRequests.updateFileUser(formData);
  }
  catch (err) {
    throw err;
  }
  finally {
    dispatch(removeLoading());
  }
};
