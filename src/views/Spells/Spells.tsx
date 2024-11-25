import { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, Stack } from '@mui/material';
import { useVersionStore, useSpellStore } from '@/hooks';
import { SpellDataType } from '@/types/spell.type';

const Spell = () => {
  const version = useVersionStore((state) => state.version);
  const spellData = useSpellStore((state) => state.spell);

  const [spells, setSpells] = useState<{ [key: string]: SpellDataType }>(null);

  useEffect(() => {
    if (version && spellData) {
      // 제외할 스펠 목록
      const excludedSpells = [
        'Summoner_UltBookSmitePlaceholder', // TBD 및 공격-강타
        'Summoner_UltBookPlaceholder', // 게임 시작 후 결정
        'SummonerSnowURFSnowball_Mark', // 표식
        'SummonerPoroThrow', // 포로 던지기
        'SummonerPoroRecall', // 왕을 향해!
        'SummonerCherryHold', // 도주
        'SummonerCherryFlash', // 점멸
      ];

      // 제외할 스펠들을 필터링한 새로운 객체 생성
      const filteredSpells = Object.fromEntries(
        Object.entries(spellData.data).filter(([key]) => !excludedSpells.includes(key))
      );

      setSpells(filteredSpells);
    }
  }, [spellData]);

  return (
    <Stack>
      {spells ? (
        Object.keys(spells).map((spell) => {
          return (
            <Stack key={spell}>
              <img
                style={{ width: '50px', height: '50px' }}
                src={`${import.meta.env.VITE_DATA_DRAGON_URL}/cdn/${version}/img/spell/${spells[spell].id}.png`}
                alt={spells[spell].name}
              />
              <Box>{spells[spell].name}</Box>
              <Box>{spells[spell].description}</Box>
            </Stack>
          );
        })
      ) : (
        <Box>로딩중</Box>
      )}
    </Stack>
  );
};

export default Spell;
