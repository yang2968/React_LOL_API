import { useEffect, useState } from 'react';

import api from '@/apis';

function App() {
  const [count, setCount] = useState(0);

  const fetchGameData = async () => {
    try {
      // 1. 패치 버전 가져오기
      const patchVersionData = await api.getCurrentPatchVersion();
      const currentVersion = patchVersionData[0];

      // 2. 스펠 정보 가져오기
      const spellsData = await api.getSpellsInfo(currentVersion);
      console.log(spellsData);

      // 3. 아이템 정보 가져오기
      const itemsData = await api.getItemsInfo(currentVersion);
      console.log(itemsData);

      // 4. 챔피언 정보 가져오기
      const championsData = await api.getChampionsInfo(currentVersion);
      console.log(championsData);
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
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href='https://react.dev' target='_blank'>
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
