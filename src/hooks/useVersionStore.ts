import { create } from 'zustand';

interface StoreState {
  version: number | null; // SpellType 데이터 추가
  setVersion: (data: number) => void; // SpellData를 설정하는 액션 추가
}

const useVersionStore = create<StoreState>((set) => ({
  version: null, // 초기값 설정
  setVersion: (data) => set({ version: data }), // SpellData를 설정하는 액션 구현
}));

export default useVersionStore;
