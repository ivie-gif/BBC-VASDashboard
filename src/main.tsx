// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import theme from 'theme/theme.ts';
// import { RouterProvider } from 'react-router-dom';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import BreakpointsProvider from 'providers/BreakpointsProvider.tsx';
// import router from 'routes/router';
// import './index.css';
// // import { AppThemeProvider } from 'theme/components/context';

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme} >
//       {/* <AppThemeProvider> */}
//         <BreakpointsProvider>
//           <CssBaseline />
//           <RouterProvider router={router} />
//         </BreakpointsProvider>
//       {/* </AppThemeProvider> */}
//     </ThemeProvider>
//   </React.StrictMode>,
// );


// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import BreakpointsProvider from 'providers/BreakpointsProvider';
import { ColorModeProvider } from './theme/components/ColorModeProvider';
import router from 'routes/router';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ColorModeProvider>
      <BreakpointsProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </BreakpointsProvider>
    </ColorModeProvider>
  </React.StrictMode>
);
