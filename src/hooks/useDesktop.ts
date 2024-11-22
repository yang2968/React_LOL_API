import { useMediaQuery } from '@mui/material';

const useDesktop = () => {
  const isDesktop = useMediaQuery('(min-width: 1200px)');
  return isDesktop;
};

export default useDesktop;
