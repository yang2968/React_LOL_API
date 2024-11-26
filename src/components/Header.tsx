import { Stack, Box } from '@mui/material';
import ModeButton from '@/components/ModeButon';

const Header = () => {
  return (
    <Stack direction='row' justifyContent='space-between' sx={{ backgroundColor: 'wheat', padding: '5px' }}>
      <Box>{'LOL API TEST'}</Box>
      <ModeButton />
    </Stack>
  );
};

export default Header;
