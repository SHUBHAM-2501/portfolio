import { createTheme } from '@mui/material/styles';

// Color palette for light mode
const lightTheme = {
  primary: {
    main: '#3f51b5',
    light: '#757de8',
    dark: '#002984',
  },
  secondary: {
    main: '#f50057',
    light: '#ff4081',
    dark: '#c51162',
  },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
  },
};

// Color palette for dark mode
const darkTheme = {
  primary: {
    main: '#90caf9',
    light: '#c3fdff',
    dark: '#5d99c6',
  },
  secondary: {
    main: '#f48fb1',
    light: '#ffc1e3',
    dark: '#bf5f82',
  },
  background: {
    default: '#121212',
    paper: '#1e1e1e',
  },
  text: {
    primary: '#e0e0e0',
    secondary: '#b0b0b0',
  },
};

// Create theme function that returns light or dark theme
export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightTheme : darkTheme),
    },
    typography: {
      fontFamily: [
        'Roboto',
        'Arial',
        'sans-serif',
        '"Segoe UI"',
        'Helvetica',
      ].join(','),
      h1: {
        fontWeight: 700,
        fontSize: '3rem',
      },
      h2: {
        fontWeight: 600,
        fontSize: '2.25rem',
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
      },
      h4: {
        fontWeight: 500,
        fontSize: '1.5rem',
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
      },
    },
    shape: {
      borderRadius: 8,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            padding: '8px 16px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === 'light' 
              ? '0px 4px 20px rgba(0, 0, 0, 0.08)' 
              : '0px 4px 20px rgba(0, 0, 0, 0.4)',
          },
        },
      },
    },
  });
};

export default createAppTheme;