import { Box, Typography, Button, TextField, Select, MenuItem, FormControl, Stack } from '@mui/material';
import { SpellType, SpellDataType } from '@/types';

const SpellItem = ({ spell }: { spell: SpellType }) => {
  return (
    <Stack>
      <Box>{'스펠 아이템'}</Box>
    </Stack>
  );
};

export default SpellItem;
