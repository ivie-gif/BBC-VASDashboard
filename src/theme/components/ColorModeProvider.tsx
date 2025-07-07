import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import getTheme from 'theme/theme';

type Mode = 'light' | 'dark';

interface ColorModeContextType {
  toggleColorMode: () => void;
  mode: Mode;
}

const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: 'dark',
});

export const useColorMode = (): ColorModeContextType => {
  return useContext(ColorModeContext);
};

interface ColorModeProviderProps {
  children: ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProviderProps) => {
  const [mode, setMode] = useState<Mode>('dark');

  // Optional: persist mode across refreshes
  useEffect(() => {
    const storedMode = localStorage.getItem('app-color-mode') as Mode;
    if (storedMode) {
      setMode(storedMode);
    }
  }, []);

  const toggleColorMode = () => {
    setMode((prevMode) => {
      const next = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('app-color-mode', next);
      return next;
    });
  };

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
