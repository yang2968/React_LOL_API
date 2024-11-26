import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  // cors 관련 설정
  server: {
    port: 9999,
    proxy: {
      '/api/account': {
        target: 'https://asia.api.riotgames.com',
        rewrite: (path) => path.replace(/^\/api\/account\//, ''),
        changeOrigin: true,
      },
      '/api/summoner': {
        target: 'https://kr.api.riotgames.com',
        rewrite: (path) => path.replace(/^\/api\/summoner\//, ''),
        changeOrigin: true,
      },
      '/data-dragon': {
        target: 'https://ddragon.leagueoflegends.com',
        rewrite: (path) => path.replace(/^\/data-dragon\//, ''),
        changeOrigin: true,
      },
    },
  },
});
