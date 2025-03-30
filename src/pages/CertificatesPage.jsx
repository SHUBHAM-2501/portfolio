import { Container, Typography, Box, Grid } from '@mui/material';
import CertificateCard from '../components/certificates/CertificateCard';
import { motion } from 'framer-motion';

// Sample certificates data - replace with your actual certifications
const certificatesData = [
  {
    id: 1,
    title: 'Data Structures and Algorithms',
    issuer: 'GeeksforGeeks',
    date: 'January 2025',
    image: 'https://res.cloudinary.com/dboofis9s/image/upload/v1743315694/gfg_DSA_page-0001_lowdxd.jpg',
    credentialUrl: 'https://media.geeksforgeeks.org/courses/certificates/42ce52d494183e668748cdc8e28a7bda.pdf',
    skills: ['Data Structures and Algorithms', 'Problem Solving']
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    issuer: 'CodeChef',
    date: 'November 2024',
    image: 'https://res.cloudinary.com/dboofis9s/image/upload/v1743315702/shubham_jha_25-Learn_JavaScript_page-0001_hhehoq.jpg',
    credentialUrl: 'https://www.codechef.com/certificates/public/e8843b3',
    skills: ['JavaScript', 'ES6+', 'Async Programming']
  },
  {
    id: 3,
    title: 'GitHub Copilot Beginner to Pro - AI for Coding & Development',
    issuer: 'Udemy',
    date: 'March 2025',
    image: 'https://res.cloudinary.com/dboofis9s/image/upload/v1743315677/Github_copilot_page-0001_nrechk.jpg',
    credentialUrl: 'https://www.udemy.com/certificate/UC-3cb9a743-88c3-4347-8c37-46439c6dab22/',
    skills: ['GitHub copilot', 'AI Tools', 'Coding Assistance']
  },
  {
    id: 4,
    title: 'Database Management System',
    issuer: 'Infosys Springboard',
    date: 'July 2023',
    image: 'https://res.cloudinary.com/dboofis9s/image/upload/v1743315714/DBMS_certificate_page-0001_slj599.jpg',
    credentialUrl: 'https://res.cloudinary.com/dboofis9s/image/upload/v1743315714/DBMS_certificate_page-0001_slj599.jpg',
    skills: ['Database Management', 'SQL', 'Data Modeling']
  },
  {
    id: 5,
    title: ' Data Visualization with Tableau',
    issuer: 'Coursera',
    date: 'May 2023',
    image: 'https://res.cloudinary.com/dboofis9s/image/upload/v1743315745/Coursera_tableau_certificate_page-0001_tpyxfo.jpg',
    credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/HMRZMV47JSJN',
    skills: ['Data Visualization', 'Tableau', 'Business Intelligence']
  }
];

export default function CertificatesPage() {
  return (
    <Box component="section" sx={{ py: 8, width: '100%' }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 4, lg: 6 } }}>
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
            sx={{ 
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: { xs: 2, md: 3 }
            }}
          >
            My Certificates
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            color="text.secondary"
            sx={{ 
              mb: { xs: 4, md: 6 }, 
              maxWidth: '80%', 
              mx: 'auto',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            Professional certifications and courses I've completed to expand my skills and knowledge in web development and related fields.
          </Typography>
        </motion.div>
        
        {/* Certificates grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {certificatesData.map((certificate) => (
            <Grid item key={certificate.id} xs={12} sm={6} md={4} lg={4} xl={3}>
              <CertificateCard certificate={certificate} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}