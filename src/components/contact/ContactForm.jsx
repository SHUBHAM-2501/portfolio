import { useState, useRef } from 'react';
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Paper, 
  Grid,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Replace these with your EmailJS service details
const EMAILJS_SERVICE_ID = 'replace_with_your_service_id';
const EMAILJS_TEMPLATE_ID = 'replace_with_your_template_id';
const EMAILJS_PUBLIC_KEY = 'replace_with_your_public_key';

export default function ContactForm() {
  const form = useRef();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  // Form validation
  const [errors, setErrors] = useState({});
  
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = 'Email is required';
        else if (!emailRegex.test(value)) error = 'Invalid email address';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    
    return error;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Validate field and update errors
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;
    
    // Validate each field
    Object.entries(formData).forEach(([name, value]) => {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result.text);
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Message sent successfully! I will get back to you soon.',
        severity: 'success'
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Show error message
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again later.',
        severity: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };
  
  return (
    <>
      <Paper 
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        elevation={3} 
        sx={{ p: { xs: 3, sm: 4 }, borderRadius: 2 }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          Get in Touch
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph>
          Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.
        </Typography>
        
        <Box component="form" ref={form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="name"
                label="Your Name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                required
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                label="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                required
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="message"
                label="Your Message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                fullWidth
                required
                variant="outlined"
                multiline
                rows={4}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={isSubmitting}
                startIcon={isSubmitting ? <CircularProgress size={24} /> : <SendIcon />}
                sx={{ mt: 2 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      
      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}