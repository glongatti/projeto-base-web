import {
  addLoading,
  removeLoading,
} from './loading';
import UtilsRequests from '../../api/utils';

// eslint-disable-next-line
export const getAddressByCep = (zipcode) => async (dispatch) => {
  dispatch(addLoading());
  let address = null;
  try {
    address = await UtilsRequests.getAddressByCep(zipcode);
  }
  catch (err) {
    throw err;
  }
  finally {
    dispatch(removeLoading());
  }
  return address;
};
