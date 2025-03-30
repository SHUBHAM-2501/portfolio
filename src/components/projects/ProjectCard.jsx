import { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  Stack, 
  IconButton,
  CardActions,
  LinearProgress
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  const { title, description, images, technologies, liveUrl, githubUrl } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  
  // Slideshow logic
  useEffect(() => {
    const intervalTime = 2000; // 2 seconds per image
    let animationFrame;
    
    // Progress bar animation
    const startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / intervalTime) * 100);
      setProgress(newProgress);
      
      if (elapsed < intervalTime) {
        animationFrame = requestAnimationFrame(updateProgress);
      }
    };
    
    // Start progress animation
    updateProgress();
    
    // Set up interval for image change
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0);
    }, intervalTime);
    
    // Clean up
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrame);
    };
  }, [currentImageIndex, images.length]);
  
  return (
    <motion.div
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ height: '100%' }}
    >
      <Card 
        sx={{ 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',
          overflow: 'hidden',
        }} 
        elevation={3}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="300" // Increased from 200 to 300
            image={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            sx={{ 
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              objectFit: 'cover', // Ensures the image covers the area properly
              objectPosition: 'center',
            }}
          />
          <LinearProgress 
            variant="determinate" 
            value={progress} 
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              height: 3,
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'primary.main',
              }
            }} 
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 'medium',
            }}
          >
            {currentImageIndex + 1}/{images.length}
          </Box>
        </Box>
        
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h3">
            {title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mb: 2,
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {description}
          </Typography>
          
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1} sx={{ mt: 2 }}>
            {technologies.map((tech) => (
              <Chip 
                key={tech} 
                label={tech} 
                size="small" 
                variant="outlined" 
                color="primary" 
                sx={{ margin: '2px' }}
              />
            ))}
          </Stack>
        </CardContent>
        
        <CardActions sx={{ justifyContent: 'flex-end', px: 2, pb: 2 }}>
          {githubUrl && (
            <IconButton 
              aria-label="GitHub Repository" 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              <GitHubIcon />
            </IconButton>
          )}
          
          {liveUrl && (
            <IconButton 
              aria-label="Live Demo" 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              color="primary"
            >
              <LaunchIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </motion.div>
  );
}