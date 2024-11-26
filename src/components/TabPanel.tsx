import * as React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  const theme = useTheme();
  return (
    <Box
      sx={{ width: '1200px', backgroundColor: theme.palette.background.default }}
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};

export default TabPanel;
