import { Box, Container, Typography, IconButton, Link as MuiLink } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { name: 'GitHub', icon: GitHub, url: 'https://github.com/SHUBHAM-2501' },
    { name: 'LinkedIn', icon: LinkedIn, url: 'https://www.linkedin.com/in/shubham-jha-52b203164/' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.mode === 'light' 
          ? theme.palette.grey[100] 
          : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: { xs: 2, md: 0 } }}>
            © {currentYear} Your Portfolio. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  component={MuiLink}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  sx={{ mx: 1 }}
                  color="primary"
                >
                  <social.icon />
                </IconButton>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}