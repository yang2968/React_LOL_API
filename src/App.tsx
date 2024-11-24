import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import api from '@/apis';
import { useSpellStore, useItemStore, useVersionStore, useChampionStore } from '@/hooks';

import Test from '@/views/Test';
import Spells from '@/views/Spells/Spells';
import Items from '@/views/Items/Items';
import Champions from '@/views/Champions/Champions';

const App = () => {
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

    // api
    //   .getCurrentPatchVersion()
    //   .then((data) => {
    //     if (data) {
    //       api.getSpellsInfo(data[0]).then((data: SpellType) => {
    //         if (data.data) {
    //           const tt = data.data;
    //           console.log(tt);
    //           // Object.keys(spells).forEach((key) => {
    //           //   console.log(spells[key]);
    //           // });
    //         }
    //       });

    //       // api.getChampionsInfo(data[0]).then((data) => {
    //       //   if (data) {
    //       //     console.log(data);
    //       //   }
    //       // });
    //     }
    //   })
    //   .finally(() => {
    //     // setIsLoading(false);
    //   });

    // const userNickname = "썸데이들려드릴게요"
    // const tagLine = "yhw"
    // const encodedName = encodeURIComponent(userNickname)

    // api
    //   .getSummonerInfo(encodedName, tagLine)
    //   .then((data) => {
    //     if (data) {
    //       console.log(data);

    //       // setBuildings(data);
    //     }
    //   })
    //   .finally(() => {
    //     // setIsLoading(false);
    //   });

    // let data = [
    //   { name: 'Comoros', code: 'KM' },
    //   { name: 'Congo', code: 'CG' },
    //   { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    //   { name: 'Cook Islands', code: 'CK' },
    //   { name: 'Costa Rica', code: 'CR' },
    //   { name: "Cote D'Ivoire", code: 'CI' },
    //   { name: 'Croatia', code: 'HR' },
    //   { name: 'Cuba', code: 'CU' },
    //   { name: 'Cyprus', code: 'CY' },
    // ];

    // let search = 'om';
    // let filterData = data.filter((item) => item.name == 'Congo');
    // console.log(filterData);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}>
        <Routes>
          <Route path='/' element={<Test />} />
          <Route path='/spells' element={<Spells />} />
          <Route path='/items' element={<Items />} />
          <Route path='/champions' element={<Champions />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
