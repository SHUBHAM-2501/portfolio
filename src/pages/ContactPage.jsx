import { Container, Typography, Box, Grid, Paper, useTheme } from '@mui/material';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

export default function ContactPage() {
  const theme = useTheme();
  
  // Contact information
  const contactInfo = [
    {
      icon: EmailIcon,
      title: 'Email',
      details: 'skjha2501@gmail.com',
      color: theme.palette.primary.main,
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: '+91 6280918596',
      color: theme.palette.secondary.main,
    },
    {
      icon: LocationOnIcon,
      title: 'Location',
      details: 'Bangalore, India',
      color: theme.palette.success.main,
    },
  ];

  return (
    <Box component="section" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
          >
            Contact Me
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Looking for a dedicated and skilled web developer to join your team? Feel free to reach out! I'm open to job opportunities, freelance projects.
          </Typography>
        </motion.div>
        
        <Grid container spacing={4}>
          {/* Contact information cards */}
          <Grid item xs={12} md={4}>
            <Grid container direction="column" spacing={3}>
              {contactInfo.map((info, index) => (
                <Grid item key={info.title}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'flex-start',
                        height: '100%',
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: info.color,
                          color: '#fff',
                          p: 1,
                          borderRadius: 1,
                          mr: 2,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <info.icon />
                      </Box>
                      <Box>
                        <Typography variant="h6" component="h3" gutterBottom>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {info.details}
                        </Typography>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          
          {/* Contact form */}
          <Grid item xs={12} md={8}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}