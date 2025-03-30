import { createContext, useState, useMemo, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, CssBaseline } from '@mui/material';
import { createAppTheme } from './theme';

// Create context to manage theme mode
const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

// Custom hook to use the color mode context
export const useColorMode = () => useContext(ColorModeContext);

// Theme provider component
export default function ThemeProvider({ children }) {
  // Use localStorage to persist theme preference if available
  const storedMode = typeof window !== 'undefined' 
    ? localStorage.getItem('themeMode') || 'light' 
    : 'light';
    
  const [mode, setMode] = useState(storedMode);

  // Color mode context with toggle function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        if (typeof window !== 'undefined') {
          localStorage.setItem('themeMode', newMode);
        }
      },
      mode,
    }),
    [mode]
  );

  // Create theme based on current mode
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
}