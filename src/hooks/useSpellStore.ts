import { create, useStore } from 'zustand';
import { SpellType } from '../types/spell.type';

interface StoreState {
  spell: SpellType | null; // SpellType 데이터 추가
  setSpell: (data: SpellType) => void; // SpellData를 설정하는 액션 추가
}

const useSpellStore = create<StoreState>((set) => ({
  spell: null, // 초기값 설정
  setSpell: (data) => set({ spell: data }), // SpellData를 설정하는 액션 구현
}));

export default useSpellStore;
