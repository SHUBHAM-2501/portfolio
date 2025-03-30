import { Box, Typography, Paper, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';

export default function SkillCard({ skill }) {
  const { name, icon: Icon, color } = skill;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <Paper
        elevation={2}
        sx={{
          p: 2.5,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          borderTop: 3,
          borderColor: color || 'primary.main',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
          {Icon && (
            <Box
              sx={{
                mr: 1.5,
                display: 'flex',
                color: color || 'primary.main',
              }}
            >
              <Icon fontSize="large" />
            </Box>
          )}
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
        </Box>
        
        <Box sx={{ width: '100%', mt: 1 }}>
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              height: 8,
              borderRadius: 5,
              backgroundColor: 'grey.200',
              '& .MuiLinearProgress-bar': {
                borderRadius: 5,
                backgroundColor: color || 'primary.main',
              },
            }}
          />
        </Box>
      </Paper>
    </motion.div>
  );
}