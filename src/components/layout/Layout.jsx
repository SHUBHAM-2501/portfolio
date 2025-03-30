import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <Box
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Navbar />
      <Box
        component="main"
        sx={{ 
          flexGrow: 1,
          py: 4,
          width: '100%',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}