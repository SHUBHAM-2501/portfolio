import { Container, Typography, Box, Button, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          minHeight: '80vh',
          py: 4,
          gap: { xs: 6, md: 2 },
        }}
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: 1 }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{ mb: 2, fontWeight: 'bold' }}
            >
              Hi, I'm <span className="text-primary-500">SHUBHAM KUMAR JHA</span>
            </Typography>
            <Typography
              variant="h4"
              component="div"
              sx={{ mb: 3, color: 'text.secondary' }}
            >
              Web Developer & Data Analyst
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              I build responsive web applications with modern technologies. 
              Passionate about creating beautiful, functional interfaces and solving complex problems.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component={Link}
                  to="/projects"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component={Link}
                  to="/contact"
                  variant="outlined"
                  size="large"
                >
                  Contact Me
                </Button>
              </motion.div>
            </Box>
          </Box>
        </motion.div>

        {/* Hero Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center' }}
        >
          <Avatar
            src="https://media.licdn.com/dms/image/v2/D5603AQGEnlYiwrvJ3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726758259177?e=1748476800&v=beta&t=YjZRz7sP0Xf4xh1FW5-1dsCaoJJTfpZUJsM6eYkFDLE" 
            alt="SHUBHAM KUMAR JHA"
            sx={{
              width: { xs: 240, sm: 320, md: 380 },
              height: { xs: 240, sm: 320, md: 380 },
              boxShadow: 6,
            }}
            className="border-4 border-primary-200 dark:border-primary-900"
          />
        </motion.div>
      </Box>
    </Container>
  );
}