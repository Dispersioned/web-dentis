import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
    body1: {
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      // light: '#1C7D72',
      main: '#146D63',
      dark: '#115D54',
      // main: '#1B998F',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          fontWeight: 'bold',
        },
      },
    },
  },
});
