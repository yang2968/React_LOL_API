import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '@/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import api from '@/apis';
import { useDarkModeStore, useSpellStore, useItemStore, useVersionStore, useChampionStore } from '@/hooks';

import Spells from '@/views/Spells/Spells';
import Items from '@/views/Items/Items';
import Champions from '@/views/Champions/Champions';
import Main from '@/views/Main';
import Header from '@/components/Header';

import Summoner from '@/views/Summoner/Summoner';

const App = () => {
  const { darkMode } = useDarkModeStore();
  const theme = darkMode ? darkTheme : lightTheme;
  const setSpell = useSpellStore((state) => state.setSpell);
  const setItem = useItemStore((state) => state.setItem);
  const setVersion = useVersionStore((state) => state.setVersion);
  const setChampion = useChampionStore((state) => state.setChampion);

  const fetchGameData = async () => {
    try {
      // 1. 패치 버전 가져오기
      const patchVersionData = await api.getCurrentPatchVersion();
      if (patchVersionData.length > 0) {
        const currentVersion = patchVersionData[0];
        setVersion(currentVersion);
        // 2. 스펠 정보 가져오기
        const spellsData = await api.getSpellsInfo(currentVersion);
        console.log(spellsData);
        setSpell(spellsData);

        // 3. 아이템 정보 가져오기
        const itemsData = await api.getItemsInfo(currentVersion);
        console.log(itemsData);
        setItem(itemsData);

        // 4. 챔피언 정보 가져오기
        const championsData = await api.getChampionsInfo(currentVersion);
        console.log(championsData);
        setChampion(championsData);
      }
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/spells' element={<Spells />} />
          <Route path='/items' element={<Items />} />
          <Route path='/champions' element={<Champions />} />
          <Route path='/summoner/:summoner' element={<Summoner />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
