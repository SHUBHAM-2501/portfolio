import { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Tabs, 
  Tab,
  useMediaQuery,
  useTheme,
  Stack
} from '@mui/material';
import ProjectCard from '../components/projects/ProjectCard';
import { motion } from 'framer-motion';

// Sample project data - you can replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: 'DevMatch',
    description: 'DevMatch is a social networking platform designed specifically for developers to connect with like-minded individuals, build professional relationships, and potentially find collaboration partners. The application implements a Tinder-like interface for developers to match based on skills, interests, and experience.',
    images: [
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331369/devmatch5_xahbmf.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331370/devmatch4_lur0na.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331370/devmatch2_ycnmum.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331370/devmatch4_lur0na.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331369/devmatch6_vsqg9v.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331369/devmatch3_loxua7.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331369/devmatch1_xqffbn.jpg',

    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Socket.io'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SHUBHAM-2501/DevMatch',
    liveUrl: 'https://github.com/SHUBHAM-2501/devMatch-UI'
  },
  {
    id: 2,
    title: 'Wonderlust',
    description: 'Wanderlust is a travel-related web application built using Node.js, Express, and MongoDB. It allows users to manage listings and reviews for various travel destinations.',
    images: [
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331402/wonderlust_2_fqsucx.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331402/wonderlust_3_vvykeg.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331402/wonderlust_1_t8leaz.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331401/wonderlust_4_xasopg.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331401/wonderlust_6_iarot4.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331401/wonderlust_5_wkyivo.jpg',
    ],
    technologies: ['Ejs', 'Node.js', 'Express','MongoDB', 'Bootstrap', 'Mapbox'],
    category: 'fullstack',
    githubUrl: 'https://github.com/SHUBHAM-2501/WEB_Project',
    liveUrl: 'https://web-project-2-lzoc.onrender.com/listings'
  },
  {
    id: 3,
    title: 'Gpt-Flix',
    description: 'Gpt-Flix is a web application that leverages GPT-3 to provide movie and TV show recommendations based on user input. This project aims to enhance the user experience by offering personalized suggestions.',
    images: [
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331460/gpt1_nhhcmt.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743331460/gpt2_f8bgbx.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743349587/gpt3_zagvsf.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743349587/gpt4_iij1zm.jpg',
    ],
    technologies: ['React', 'Tailwind CSS', 'OpenAI API', 'Redux'],
    category: 'frontend',
    githubUrl: 'https://github.com/SHUBHAM-2501/GPT-Flix',
    liveUrl: 'https://gpt-flix-one.vercel.app/'
  },
  {
    id: 4,
    title: 'Weather-App',
    description: 'A simple weather application that provides real-time weather updates and forecasts for any location. Built using React and API.',
    images: [
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743349586/weather1_gvktym.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743349586/weather2_tmtr7t.jpg',
      'https://res.cloudinary.com/dboofis9s/image/upload/v1743349586/weather3_fiie56.jpg',
    ],
    technologies: ['Next.js', 'AI - agents', 'Prompting', 'Tailwind CSS','Typescript'],
    category: 'frontend',
    githubUrl: 'https://github.com/SHUBHAM-2501/weather-app',
  },
];

export default function ProjectsPage() {
  const [category, setCategory] = useState('all');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));
  
  const filteredProjects = category === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === category);
  
  const handleChangeCategory = (event, newCategory) => {
    setCategory(newCategory);
  };
  
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 }, width: '100%' }}>
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
            My Projects
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            color="text.secondary"
            sx={{ 
              mb: { xs: 4, md: 6 }, 
              maxWidth: 800, 
              mx: 'auto',
              px: 2,
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
            }}
          >
            A collection of web development projects I've built. Each project showcases different skills and technologies.
          </Typography>
        </motion.div>
        
        {/* Category filter tabs */}
        <Box sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'center',
          width: '100%',
          overflow: 'auto'
        }}>
          <Tabs 
            value={category} 
            onChange={handleChangeCategory}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{ 
              mb: 3,
              '& .MuiTabs-flexContainer': {
                justifyContent: isMobile ? 'flex-start' : 'center'
              },
              '& .MuiTab-root': {
                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                minWidth: { xs: 'auto', sm: 120 },
                px: { xs: 1, sm: 2 }
              }
            }}
          >
            <Tab label="All Projects" value="all" />
            <Tab label="Frontend" value="frontend" />
            <Tab label="Full Stack" value="fullstack" />
          </Tabs>
        </Box>
        
        {/* Projects grid */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {filteredProjects.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <ProjectCard project={project} />
            </Grid>
          ))}
          
          {filteredProjects.length === 0 && (
            <Box 
              sx={{ 
                width: '100%', 
                textAlign: 'center', 
                py: { xs: 4, md: 8 }
              }}
            >
              <Typography variant="h6" color="text.secondary">
                No projects found in this category.
              </Typography>
            </Box>
          )}
        </Grid>
        
        {/* Mobile navigation hint */}
        {isMobile && (
          <Box sx={{ 
            mt: 4, 
            textAlign: 'center', 
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Typography 
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.8rem',
                opacity: 0.7,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Box component="span" sx={{ display: 'inline-block', mx: 0.5 }}>←</Box>
              Swipe to see more categories
              <Box component="span" sx={{ display: 'inline-block', mx: 0.5 }}>→</Box>
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}