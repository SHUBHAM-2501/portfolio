import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import { Box } from '@mui/material';

export default function HomePage() {
  return (
    <Box>
      <Hero />
      <AboutMe />
    </Box>
  );
}