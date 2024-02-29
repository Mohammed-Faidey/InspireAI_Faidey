import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { light, dark } from './palette';

const getTheme = mode => responsiveFontSizes(
  createTheme({
    palette: mode === 'light' ? light : dark,
    layout: {
      contentWidth: 1236,
    },
    typography: {
      fontFamily: 'Lato',
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
  }),
);

export default getTheme;
