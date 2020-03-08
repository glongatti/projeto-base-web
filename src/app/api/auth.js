import RestService from '../services/rest';

async function authenticate(username, password) {
  return RestService.postRest('api/auth', {
    username,
    password,
  });
}

export default {
  authenticate,
};
