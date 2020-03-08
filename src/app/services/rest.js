import { axiosInstance } from '../../index';
import ApiUtil from '../utils/api';
import AuthService from './auth';

async function request(method, uri, data = {}, headers = {}, extras = {}) {
  if (!headers['Content-Type']) headers['Content-Type'] = 'application/json';

  try {
    const response = await axiosInstance({
      method,
      url: `${ApiUtil.getBaseUrl()}${uri}`,
      data,
      headers,
      ...extras,
    });
    if (response && response.data) {
      if (response.data) return response.data;
      return response.data;
    }
    return response;
  } catch (err) {
    throw err;
  }
}

function publicHeader(header = {}) {
  header['content-type'] = 'application/json';
  return header;
}

async function getRest(uri, header) {
  return request('get', uri, {}, header);
}

async function postRest(uri, data, header) {
  return request('post', uri, data, publicHeader(header));
}

async function putRest(uri, data, header) {
  return request('put', uri, data, publicHeader(header));
}

function authenticatedHeader(header = {}) {
  const auth = AuthService.get();
  if (auth) header.authentication = `${auth.token}`;
  return header;
}

async function getAuthenticated(uri, header, extras) {
  return request('get', uri, {}, authenticatedHeader(header), extras);
}

async function postAuthenticated(uri, data, header) {
  return request('post', uri, data, authenticatedHeader(header));
}

async function postFileAuthenticated(uri, data, header) {
  return request('post', uri, data, {
    ...authenticatedHeader(header),
    'content-type': 'multipart/form-data;'
  });
}

async function putAuthenticated(uri, data, header) {
  return request('put', uri, data, authenticatedHeader(header));
}

async function deleteAuthenticated(uri, data, header) {
  return request('delete', uri, data, authenticatedHeader(header));
}

export default {
  getRest,
  postRest,
  putRest,
  getAuthenticated,
  postAuthenticated,
  putAuthenticated,
  authenticatedHeader,
  deleteAuthenticated,
  postFileAuthenticated,
};
