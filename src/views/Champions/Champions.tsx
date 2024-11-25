import { useEffect, useState } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, Stack } from '@mui/material';
import { useVersionStore, useChampionStore } from '@/hooks';
import { ChampionData } from '@/types/champion.type';
import useDesktop from '@/hooks/useDesktop';

const Spell = () => {
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
        <Stack gap={1} direction={isDesktop ? 'row' : 'column'}>
            {champions ? (
                Object.keys(champions)
                    .sort((a, b) => champions[a].name.localeCompare(champions[b].name))
                    .map((champion) => {
                        return (
                            <Box key={champion}>
                                <img
                                    style={{ width: '50px', height: '50px' }}
                                    src={`${import.meta.env.VITE_DATA_DRAGON_URL}/cdn/${version}/img/champion/${champions[champion].image.full}`}
                                    alt={champions[champion].name}
                                />
                                <Box sx={{ fontSize: '12px' }}>{champions[champion].name}</Box>
                                {/* <Box>{champions[champion].title}</Box>
                                <Box>{champions[champion].blurb}</Box> */}
                            </Box>
                        );
                    })
            ) : (
                <Box>로딩중</Box>
            )}
        </Stack>
    );
};

export default Spell;
