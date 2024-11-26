import { useEffect, useState } from 'react';
import { Tabs, Tab, Stack, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Home from './Tabs/Home/Home';
import { useTheme } from '@mui/material/styles';
import TabPanel from '@components/TabPanel';

import Spells from '@/views/Spells/Spells';
import Items from '@/views/Items/Items';
import Champions from '@/views/Champions/Champions';

const Main = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // useEffect(() => {
  // }, [navigate]);

  return (
    <Stack sx={{ backgroundColor: theme.palette.background.default }}>
      <Tabs value={value} onChange={handleChange} textColor='primary' indicatorColor='primary'>
        {value === -1 && <Tab value={-1} label='NoSelect' sx={{ display: 'none' }} />}
        <Tab value={0} label='홈' />
        <Tab value={1} label='스펠 ' />
        <Tab value={2} label='아이템' />
        <Tab value={3} label='챔피언' />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Spells />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Items />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Champions />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Home />
      </TabPanel>
    </Stack>
  );
};

export default Main;
