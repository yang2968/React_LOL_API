// 라이트/다크 모드 설정 버튼
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Box } from '@mui/material';
import { useDarkModeStore } from '@/hooks';

const ModeButton = () => {
  const { darkMode, setDarkMode } = useDarkModeStore();
  return darkMode ? (
    <Box sx={{ color: 'black' }} onClick={() => setDarkMode(!darkMode)}>
      <DarkModeIcon />
    </Box>
  ) : (
    <Box sx={{ color: 'white' }} onClick={() => setDarkMode(!darkMode)}>
      <LightModeIcon />
    </Box>
  );
};

export default ModeButton;
