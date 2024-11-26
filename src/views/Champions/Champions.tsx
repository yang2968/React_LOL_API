import { useEffect, useState } from 'react';
import { Stack, Box, Modal, Typography } from '@mui/material';
import { useVersionStore, useChampionStore } from '@/hooks';
import { useTheme } from '@mui/material/styles';
import useDesktop from '@/hooks/mediaQuery/useDesktop';
import { ChampionData } from '@/types/champion.type';
import api from '@/apis';

const Spell = () => {
    const theme = useTheme();
    const isDesktop = useDesktop();
    const version = useVersionStore((state) => state.version);
    const championData = useChampionStore((state) => state.champion);

    const [champions, setChampions] = useState<{ [key: string]: ChampionData }>(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        if (version && championData) {
            console.log('championData', championData);

            setChampions(championData.data);
        }
    }, [championData]);

    return (
        <Stack gap={1} direction='row' flexWrap='wrap'>
            {champions ? (
                Object.keys(champions)
                    .sort((a, b) => champions[a].name.localeCompare(champions[b].name))
                    .map((champion) => {
                        return (
                            <Stack
                                key={champion}
                                sx={{ width: '50px' }}
                                onClick={() => handleOpen()}>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Stack>
    );
};

export default Spell;
