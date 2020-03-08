import RestService from '../services/rest';

async function getUser() {
  return RestService.getAuthenticated('api/user/me');
}

async function updateFileUser(file) {
  return RestService.postFileAuthenticated('api/file-upload', file);
}

export default {
  getUser,
  updateFileUser
};
