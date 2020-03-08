import RestService from '../services/rest';

async function getAddressByCep(cep) {
  return RestService.getAuthenticated(`api/utils/address?cep=${cep}`);
}

export default {
  getAddressByCep,
};
