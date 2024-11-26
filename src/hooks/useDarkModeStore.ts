import { create } from 'zustand';

interface StoreState {
  darkMode: boolean; // 다크/라이트 모드 변수 추가
  setDarkMode: (data: boolean) => void; // 다크/라이트 모드 변수를 설정하는 액션 추가
}

const useDarkModeStore = create<StoreState>((set) => ({
  darkMode: false, // 초기값 설정
  setDarkMode: (data) => set({ darkMode: data }), // 다크/라이트 모드를 설정하는 액션 구현
}));

export default useDarkModeStore;
