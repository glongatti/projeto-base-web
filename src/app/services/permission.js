import { ls } from '../../index';

const PERMISSION_KEY = 'permissions';

function create(data) {
  deleteAll(() => {
    ls.set(
      PERMISSION_KEY,
      data,
    );
  });
}

function getAll() {
  return ls.get(PERMISSION_KEY);
}

function deleteAll(callback) {
  ls.remove(PERMISSION_KEY);
  if (typeof callback === 'function') {
    callback();
  }
}

function hasPermission(key) {
  const permissions = getAll();
  return permissions[key] !== undefined;
}

export default {
  create,
  getAll,
  deleteAll,
  hasPermission,
};
