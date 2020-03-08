import Url from '../config/app.config';

function getBaseUrl() {
  const { hostname } = window.location;
  let apiUrl;

  switch (hostname) {
    case 'localhost':
    case 'www.localhost':
      apiUrl = Url.localhost;
      break;
    case 'b2b-admin-homolog-br-dot-sa-b2b-adm-sys.appspot.com':
    case 'www.b2b-admin-homolog-br-dot-sa-b2b-adm-sys.appspot.com':
      apiUrl = Url.development;
      break;
    case 'homolog':
    case 'www.homolog':
      apiUrl = Url.homolog;
      break;
    case 'production':
    case 'www.production':
      apiUrl = Url.production;
      break;
    default:
      apiUrl = Url.localhost;
  }

  return apiUrl;
}

export default {
  getBaseUrl,
};
