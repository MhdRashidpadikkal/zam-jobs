"use client";

import React, { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Select,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
  Box,
  Fade,
  Slide,
  useTheme,
  alpha,
} from '@mui/material';

const ContactPage = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 25%, #e2e8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Effects */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '8rem',
            left: '2rem',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'pulse 3s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '4rem',
            right: '2rem',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'pulse 3s ease-in-out infinite 1s',
          },
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Header Section */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Chip
              label="GET IN TOUCH"
              sx={{
                backgroundColor: alpha('#002D62', 0.1),
                color: '#002D62',
                fontWeight: 600,
                mb: 3,
                px: 2,
                py: 1,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                lineHeight: 1.2,
                color: '#1a202c',
              }}
            >
              Contact Us
             
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                mt: 2,
                fontSize: '1.2rem',
                maxWidth: '40rem',
                mx: 'auto',
              }}
            >
              Have a question, feedback, or job inquiry? We’re here to help. Fill out the form below and we’ll get back to you shortly.
            </Typography>
          </Box>
        </Fade>

        {/* Form Section */}
        <Slide in={isVisible} direction="up" timeout={700}>
          <Paper
            elevation={0}
            sx={{
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '16px',
              p: 5,
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.15)',
            }}
          >
            <Grid container spacing={3}>
              <Grid size={{
                xs: 12,
               
              }}>
                <TextField
                InputProps={{
                  sx: {
                    color: 'black',
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: 'black',
                  },
                }}
                 fullWidth label="Full Name" variant="outlined" />
              </Grid>
              <Grid size={{
                xs: 12,
                
              }}>
                <TextField
                InputLabelProps={{
                  sx: {
                    color: 'black',
                  },
                }}
                fullWidth label="Email Address" type="email" variant="outlined" />
              </Grid>
              <Grid size={{
                xs: 12,
              }}>
                <FormControl fullWidth>
                  <InputLabel 
                    sx={{
                      color: 'black',
                    }}
                  >Subject</InputLabel>
                  <Select label="Subject" defaultValue="">
                    <MenuItem value="">Select Subject</MenuItem>
                    <MenuItem value="job_inquiry">Job Inquiry</MenuItem>
                    <MenuItem value="general">General Inquiry</MenuItem>
                    <MenuItem value="feedback">Feedback</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size ={{
                xs: 12,
              }}>
                <TextField
                InputLabelProps={{
                  sx: {
                    color: 'black',
                  },
                }}
                 fullWidth label="Message" multiline rows={4} variant="outlined" />
              </Grid>
              <Grid size ={{
                xs: 12,
              }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                    color: 'white',
                    fontWeight: 600,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: '12px',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                      transform: 'translateY(-2px) scale(1.04)',
                      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
                    },
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Slide>
      </Container>

      {/* Animation style */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </Box>
  );
};

export default ContactPage;
