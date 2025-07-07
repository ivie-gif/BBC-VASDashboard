// import { createTheme, ThemeOptions } from '@mui/material';

// import components from './component-overrides';
// import breakpoints from './breakpoints';
// import typography from './typography';
// import palette from './palette';
// import spacing from './spacing';
// import shape from './shape';


// const theme: ThemeOptions = createTheme({
//   breakpoints: breakpoints,
//   components: components,
//   typography: typography,
//   palette: palette,
//   spacing: spacing,
//   shape: shape,
// });

// export default theme;


// src/theme/theme.ts
import { createTheme } from '@mui/material';
import components from './component-overrides';
import breakpoints from './breakpoints';
import typography from './typography';
import getPalette from './palette'; // now it's a function
import spacing from './spacing';
import shape from './shape';

const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    breakpoints,
    components,
    typography,
    palette: getPalette(mode),
    spacing,
    shape,
  });

export default getTheme;
