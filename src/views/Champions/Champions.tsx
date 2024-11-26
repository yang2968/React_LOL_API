import { useEffect, useState } from 'react';
import { Grid2, Box, Typography, Button, TextField, Select, MenuItem, FormControl, Stack } from '@mui/material';
import { useVersionStore, useChampionStore } from '@/hooks';
import { ChampionData } from '@/types/champion.type';
import useDesktop from '@/hooks/mediaQuery/useDesktop';
import { useTheme } from '@mui/material/styles';

const Spell = () => {
  const theme = useTheme();
  const isDesktop = useDesktop();
  const version = useVersionStore((state) => state.version);
  const championData = useChampionStore((state) => state.champion);

  const [champions, setChampions] = useState<{ [key: string]: ChampionData }>(null);

  useEffect(() => {
    if (version && championData) {
      console.log('championData', championData);

      setChampions(championData.data);
    }
  }, [championData]);

  return (
    <Stack gap={1} direction='row' flexWrap='wrap' sx={{ backgroundColor: theme.palette.background.default }}>
      {champions ? (
        Object.keys(champions)
          .sort((a, b) => champions[a].name.localeCompare(champions[b].name))
          .map((champion) => {
            return (
              <Stack
                key={champion}
                sx={{ width: '50px' }}
                onClick={() => {
                  console.log(champion);
                }}>
                <img
                  style={{ width: '50px', height: '50px' }}
                  src={`${import.meta.env.VITE_DATA_DRAGON_URL}/cdn/${version}/img/champion/${champions[champion].image.full}`}
                  alt={champions[champion].name}
                />
                <Box
                  sx={{
                    paddingLeft: '2px',
                    fontSize: '0.7rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    color: theme.palette.text.primary,
                  }}>
                  {champions[champion].name}
                </Box>
                {/* <Box>{champions[champion].title}</Box>
                                <Box>{champions[champion].blurb}</Box> */}
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
