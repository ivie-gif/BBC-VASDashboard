// import { PaletteOptions } from '@mui/material';
// import { teal, grey, green, stone, fuchsia, bluishCyan, pinkishRed, yellowOrange } from './colors';

// const palette: PaletteOptions = {
//   primary: {
//     light: teal[50],
//     main: teal[100],
//     dark: teal[200],
//   },
//   secondary: {
//     light: fuchsia[50],
//     main: fuchsia[100],
//     dark: fuchsia[400],
//   },
//   success: {
//     light: green[200],
//     main: green[600],
//     dark: green[900],
//   },
//   info: {
//     light: bluishCyan[100],
//     main: bluishCyan[500],
//     dark: bluishCyan[900],
//   },
//   warning: {
//     light: yellowOrange[50],
//     main: yellowOrange[300],
//     dark: yellowOrange[700],
//   },
//   error: {
//     light: pinkishRed[300],
//     main: pinkishRed[600],
//     dark: pinkishRed[900],
//   },
//   background: {
//     default: stone[900],
//     paper: grey[900],
//   },
//   text: {
//     primary: stone[600],
//     secondary: stone[200],
//     disabled: stone[500],
//   },
//   divider: stone[700],
//   action: {
//     focus: stone[400],
//     disabled: stone[300],
//   },
//   grey: grey,
// };

// export default palette;



// src/theme/palette.ts
import { PaletteOptions } from '@mui/material';
import {
  teal,
  grey,
  green,
  stone,
  fuchsia,
  bluishCyan,
  pinkishRed,
  yellowOrange,
  orange,
} from './colors';

const getPalette = (mode: 'light' | 'dark'): PaletteOptions => {
  const isDark = mode === 'dark';

  return {
    mode,
    primary: {
      light: teal[50],
      main: teal[100],
      dark: teal[200],
    },
    secondary: {
      light: fuchsia[50],
      main: fuchsia[100],
      dark: fuchsia[400],
    },
    success: {
      light: green[200],
      main: green[600],
      dark: green[900],
    },
    info: {
      light: bluishCyan[100],
      main: bluishCyan[500],
      dark: bluishCyan[900],
    },
    warning: {
      light: yellowOrange[50],
      main: yellowOrange[300],
      dark: yellowOrange[700],
    },
    error: {
      light: pinkishRed[300],
      main: pinkishRed[600],
      dark: pinkishRed[900],
    },
    background: {
      default: isDark ? stone[900] : grey[100],
      paper: isDark ? grey[900] : '#ffffff',
      orange: isDark ? orange[100] : orange[900],
    },
    text: {
      primary: isDark ? stone[600] : grey[900],
      secondary: isDark ? stone[200] : grey[700],
      disabled: isDark ? stone[500] : grey[400],
    },
    divider: isDark ? stone[700] : grey[300],
    action: {
      focus: isDark ? stone[400] : grey[500],
      disabled: isDark ? stone[300] : grey[400],
    },
    grey: grey,
  };
};

export default getPalette;
