import { create } from 'zustand';
import { ItemType } from '../types/item.type';

interface StoreState {
  item: ItemType | null; // ItemType 데이터 추가
  setItem: (data: ItemType) => void; // ItemData를 설정하는 액션 추가
}

const useItemStore = create<StoreState>((set) => ({
  item: null, // 초기값 설정
  setItem: (data) => set({ item: data }), // ItemData를 설정하는 액션 구현
}));

export default useItemStore;
