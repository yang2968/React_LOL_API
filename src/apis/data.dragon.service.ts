import rest from './rest';
import { SpellType, ItemType, ChampionType } from '@/types';

// 최근 패치 버전을 가져오는 API
async function getCurrentPatchVersion(): Promise<number[]> {
  const response = await rest.get(`/data-dragon/api/versions.json`);
  if (response.status === 200) {
    return response.data;
  }
  return [];
}

// 모든 스펠 정보를 가져오는 API
async function getSpellsInfo(version: number): Promise<SpellType> {
  const response = await rest.get(`/data-dragon/cdn/${version}/data/ko_KR/summoner.json`);
  if (response.status === 200) {
    return response.data;
  }
  return {} as SpellType;
}

// 모든 아이템 정보를 가져오는 API
async function getItemsInfo(version: number): Promise<ItemType> {
  const response = await rest.get(`/data-dragon/cdn/${version}/data/ko_KR/item.json`);
  if (response.status === 200) {
    return response.data;
  }
  return {} as ItemType;
}

// 모든 챔피언 정보를 가져오는 API
async function getChampionsInfo(version: number): Promise<ChampionType> {
  const response = await rest.get(`/data-dragon/cdn/${version}/data/ko_KR/champion.json`);
  if (response.status === 200) {
    return response.data;
  }
  return {} as ChampionType;
}

// 특정 챔피언 정보를 가져오는 API
async function getChampionInfo(version: number, championName: string): Promise<any> {
  const response = await rest.get(`/data-dragon/cdn/${version}/data/ko_KR/champion/${championName}.json`);
  if (response.status === 200) {
    return response.data;
  }
  return [];
}

const dataDragonService = {
  getCurrentPatchVersion,
  getSpellsInfo,
  getItemsInfo,
  getChampionsInfo,
  getChampionInfo,
};

export default dataDragonService;
