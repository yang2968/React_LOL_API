import { Stack } from '@mui/material';
import SearchSummoner from './components/SearchSummoner';

const Home = () => {
  return (
    <Stack gap={1} sx={{ width: '100%', padding: '10px' }}>
      <SearchSummoner />
    </Stack>
  );
};

export default Home;
