import rest from './rest';
import { SummonerInfoType } from '@/types/summoner.type';

// 소환사 정보 조회 API
async function getSummonerInfo(gameName: string, tagLine: string): Promise<SummonerInfoType[]> {
  const response = await rest.get(`/riot-api/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
  if (response.status === 200) {
    return response.data;
  }
  return [];
}

const riotService = {
  getSummonerInfo,
};

export default riotService;
