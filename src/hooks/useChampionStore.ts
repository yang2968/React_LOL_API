import { create } from 'zustand';
import { ChampionType } from '../types/champion.type';

interface StoreState {
  champion: ChampionType | null; // ChampionType 데이터 추가
  setChampion: (data: ChampionType) => void; // ChampionData를 설정하는 액션 추가
}

const useChampionStore = create<StoreState>((set) => ({
  champion: null, // 초기값 설정
  setChampion: (data) => set({ champion: data }), // ChampionData를 설정하는 액션 구현
}));

export default useChampionStore;
