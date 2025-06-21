import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Work, TrendingUp } from '@mui/icons-material';
import Header from '@/components/Header';


const HiringBanner: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
        color: 'white',
        py: 6,
        mb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3,
        },
      }}
    >
      <Box sx={{position: "relative", top:'-30px',zIndex: 20 }}>
          <Header/>
      </Box>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexDirection: isMobile ? 'column' : 'row',
          textAlign: isMobile ? 'center' : 'left',
          gap: 3
        }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TrendingUp sx={{ fontSize: 32, mr: 2 }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: isMobile ? '1.5rem' : '2rem',
                }}
              >
                We Are Hiring!
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                mb: 3,
                opacity: 0.9,
                fontSize: isMobile ? '1rem' : '1.25rem',
              }}
            >
              Join our growing team and be part of something amazing. 
              Find your next career opportunity with us.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Work />}
                sx={{
                  backgroundColor: 'white',
                  color: theme.palette.secondary.main,
                  fontWeight: 600,
                  width: '200px',
                  '&:hover': {
                    backgroundColor: theme.palette.grey[100],
                  },
                }}
              >
                Browse Jobs
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  width: '200px',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flex: isMobile ? 'none' : 1
          }}>
            <Box
              sx={{
                width: isMobile ? 200 : 300,
                height: isMobile ? 200 : 300,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <Work sx={{ fontSize: isMobile ? 60 : 80, zIndex: 1 }} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HiringBanner; 