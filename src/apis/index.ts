import riotService from './riot.service';
import dataDragonService from './data.dragon.service';

const api = {
  ...riotService,
  ...dataDragonService,
};

export default api;
