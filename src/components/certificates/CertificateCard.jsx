import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  CardActionArea,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function CertificateCard({ certificate }) {
  const { title, issuer, date, image, credentialUrl, skills } = certificate;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
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
        <CardActionArea 
          component="a" 
          href={credentialUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}
        >
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt={title}
              sx={{ 
                transition: 'transform 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
            <Box 
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                bgcolor: 'rgba(0,0,0,0.6)',
                color: 'white',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <VerifiedIcon color="primary" />
            </Box>
          </Box>
          
          <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography gutterBottom variant="h6" component="h3">
              {title}
            </Typography>
            
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Issued by: {issuer}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <CalendarTodayIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {date}
              </Typography>
            </Box>
            
            <Box sx={{ mt: 'auto' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Skills:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {skills.map(skill => (
                  <Chip 
                    key={skill} 
                    label={skill} 
                    size="small" 
                    variant="outlined" 
                    color="secondary" 
                  />
                ))}
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </motion.div>
  );
}