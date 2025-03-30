import { Container, Typography, Box, Grid } from '@mui/material';
import SkillCard from '../components/skills/SkillCard';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import ComputerIcon from '@mui/icons-material/Computer';

// Sample skills data - replace with your actual skills
const skillsData = [
  {
    category: 'Programming Languages',
    icon: ComputerIcon,
    color: '#8e24aa', // Purple color
    skills: [
      { name: 'JavaScript', level: 90, icon: CodeIcon, color: '#F7DF1E' },
      { name: 'Java', level: 85, icon: CodeIcon, color: '#007396' },
      { name: 'Python', level: 80, icon: CodeIcon, color: '#3776AB' },
    ]
  },
  {
    category: 'Backend',
    icon: StorageIcon,
    color: '#009688',
    skills: [
      { name: 'Node.js', level: 80, icon: StorageIcon, color: '#339933' },
      { name: 'Express.js', level: 75, icon: StorageIcon, color: '#000000' },
      { name: 'MongoDB', level: 70, icon: StorageIcon, color: '#47A248' },
      { name: 'Firebase', level: 75, icon: StorageIcon, color: '#FFCA28' },
      { name: 'RESTful APIs', level: 85, icon: StorageIcon, color: '#FF6C37' },
    ]
  },
  {
    category: 'Frontend',
    icon: WebIcon,
    color: '#3f51b5',
    skills: [
      { name: 'React.js', level: 90, icon: CodeIcon, color: '#61DAFB' },
      { name: 'JavaScript', level: 85, icon: CodeIcon, color: '#F7DF1E' },
      { name: 'Ejs', level: 80, icon: CodeIcon, color: '#3178C6' },
      { name: 'HTML5', level: 95, icon: CodeIcon, color: '#E34F26' },
      { name: 'CSS3', level: 90, icon: CodeIcon, color: '#1572B6' },
      { name: 'Redux', level: 75, icon: CodeIcon, color: '#764ABC' },
    ]
  },
  {
    category: 'Styling & UI Frameworks',
    icon: BrushIcon,
    color: '#f50057',
    skills: [
      { name: 'Material UI', level: 85, icon: BrushIcon, color: '#0081CB' },
      { name: 'Tailwind CSS', level: 80, icon: BrushIcon, color: '#38B2AC' },
      { name: 'Styled Components', level: 75, icon: BrushIcon, color: '#DB7093' },
      { name: 'Bootstrap', level: 85, icon: BrushIcon, color: '#7952B3' },
      { name: 'DaisyUI', level: 80, icon: BrushIcon, color: '#CC6699' },
    ]
  },
  {
    category: 'Tools & Deployment',
    icon: BuildIcon,
    color: '#ff9800',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: BuildIcon, color: '#F05032' },
      { name: 'Vite', level: 70, icon: BuildIcon, color: '#C21325' },
      { name: 'VS Code', level: 95, icon: BuildIcon, color: '#007ACC' },
    ]
  },
  {
    category: 'Database',
    icon: StorageIcon,
    color: '#2196f3',
    skills: [
      { name: 'Mysql', level: 60, icon: StorageIcon, color: '#FF9900' },
      { name: 'MongoDB', level: 80, icon: StorageIcon, color: '#00C7B7' },
    ]
  },
];

export default function SkillsPage() {
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
            My Skills
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            align="center" 
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto' }}
          >
            Here are the technologies and tools I work with. I'm constantly learning and expanding my skill set to stay current with industry standards.
          </Typography>
        </motion.div>
        
        {/* Skills categories */}
        {skillsData.map((category) => (
          <Box key={category.category} sx={{ mb: 8 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
              }}
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  mr: 2,
                  color: category.color,
                  display: 'flex',
                }}
              >
                <category.icon fontSize="large" />
              </Box>
              <Typography variant="h4" component="h2">
                {category.category}
              </Typography>
            </Box>
            
            <Grid container spacing={3}>
              {category.skills.map((skill) => (
                <Grid item key={skill.name} xs={12} sm={6} md={4}>
                  <SkillCard skill={skill} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
}