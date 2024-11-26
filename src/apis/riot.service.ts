import rest from './rest';
import { AccountInfoType, SummonerInfoType, RankType } from '@/types';

// LOL 계정 정보 조회 API
async function getAccountInfo(gameName: string, tagLine: string): Promise<AccountInfoType | null> {
  const response = await rest.get(`/api/account/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`);
  if (response.status === 200) {
    return response.data;
  }
  return {} as AccountInfoType;
}

// 소환사 정보 조회 API
async function getSummonerInfo(encryptedPUUID: string): Promise<SummonerInfoType | null> {
  const response = await rest.get(`/api/summoner/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`);
  if (response.status === 200) {
    return response.data;
  }
  return {} as SummonerInfoType;
}
// 소환사 정보 조회 API
async function getSummonerRankInfo(encryptedSummonerId: string): Promise<RankType | null> {
  const response = await rest.get(`/api/summoner/lol/league/v4/entries/by-summoner//${encryptedSummonerId}`);
  if (response.status === 200) {
    return response.data;
  }
  return [] as RankType;
}

const riotService = {
  getAccountInfo,
  getSummonerInfo,
  getSummonerRankInfo,
};

export default riotService;
