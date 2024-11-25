import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4c94a4',
            light: '#72b7c5',
            dark: '#336b75',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#ffb74d',
            light: '#ffe97d',
            dark: '#c88719',
            contrastText: '#000000',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: '#ffffff',
        },
        warning: {
            main: '#ff9800',
            light: '#ffc947',
            dark: '#c66900',
            contrastText: '#ffffff',
        },
        info: {
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1976d2',
            contrastText: '#ffffff',
        },
        success: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
            contrastText: '#ffffff',
        },
    },
});

export default theme;