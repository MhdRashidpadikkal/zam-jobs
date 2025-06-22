'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Button,
  Paper,
  Fade,
  Slide,
  alpha,
} from '@mui/material';
import {
  Assignment,
  FindInPage,
  Work,
  ConnectWithoutContact,
  ArrowForward,
} from '@mui/icons-material';

const WorkingProcess = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const processes = [
    {
      id: 1,
      icon: Assignment,
      title: "Submit Your Application",
      description: "Complete your profile and submit your application with all necessary details and qualifications.",
      color: "#8B5CF6",
      delay: 0
    },
    {
      id: 2,
      icon: FindInPage,
      title: "Resume Review by Our Team",
      description: "Our expert team carefully reviews your resume and qualifications to understand your strengths.",
      color: "#3B82F6",
      delay: 150
    },
    {
      id: 3,
      icon: Work,
      title: "We Find Matching Jobs for You",
      description: "Based on your profile, we identify and match you with the most suitable job opportunities.",
      color: "#10B981",
      delay: 300
    },
    {
      id: 4,
      icon: ConnectWithoutContact,
      title: "We Connect You with Employers",
      description: "We facilitate direct connections between you and potential employers for the perfect match.",
      color: "#F59E0B",
      delay: 450
    }
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        py: 10,
        mt: 10,
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.3,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '5rem',
            left: '2.5rem',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'pulse 3s ease-in-out infinite',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '10rem',
            right: '2.5rem',
            width: '18rem',
            height: '18rem',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'pulse 3s ease-in-out infinite 1s',
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Header Section */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Chip
              label="ABOUT SERVICE"
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
              component="h1"
              sx={{
                fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                fontWeight: 700,
                color: '#1a202c',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Our Working{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Process
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: '48rem',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: '1.25rem',
              }}
            >
              Discover how we connect you with the best local job opportunities through our streamlined, 
              efficient process designed to deliver exceptional results every time.
            </Typography>
          </Box>
        </Fade>

        {/* Process Cards Grid - Now in a single row */}
        <Grid container spacing={3} sx={{ position: 'relative', mb: 8 }}>
          {/* Connecting lines SVG */}
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              zIndex: 1,
            }}
          >
            <svg
              style={{ width: '100%', height: '100%' }}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path
                d="M 12.5 50 L 37.5 50 M 62.5 50 L 87.5 50"
                stroke="url(#lineGradient)"
                strokeWidth="0.8"
                fill="none"
                strokeDasharray="4,4"
                style={{
                  animation: 'pulse 2s ease-in-out infinite',
                }}
              />
            </svg>
          </Box>

          {processes.map((process) => {
            const Icon = process.icon;
            return (
              <Grid size={{
                xs:12, sm:6, md:3 
              }} key={process.id}>
                <Slide
                  direction="up"
                  in={isVisible}
                  timeout={700}
                  style={{ transitionDelay: `${process.delay}ms` }}
                >
                  <Card
                    sx={{
                      position: 'relative',
                      background: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(16px)',
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      zIndex: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        transform: 'translateY(-8px) scale(1.02)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        '& .process-icon': {
                          transform: 'scale(1.1) rotate(5deg)',
                        },
                        '& .process-title': {
                          color: '#8B5CF6',
                        },
                        '&::after': {
                          opacity: 1,
                        },
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${alpha(process.color, 0.2)} 0%, ${alpha('#3B82F6', 0.2)} 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                        filter: 'blur(20px)',
                      },
                    }}
                  >
                    

                    <CardContent sx={{ p: 3, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      {/* Icon container */}
                      <Box
                        className="process-icon"
                        sx={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '14px',
                          background: `linear-gradient(135deg, ${process.color} 0%, ${alpha(process.color, 0.8)} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          mx: 'auto',
                          transition: 'transform 0.3s ease',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '14px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            transition: 'background 0.3s ease',
                          },
                        }}
                      >
                        <Icon sx={{ color: 'white', fontSize: '1.75rem', zIndex: 1 }} />
                      </Box>

                      {/* Content */}
                      <Typography
                        variant="h6"
                        className="process-title"
                        sx={{
                          fontWeight: 700,
                          color: '#1a202c',
                          mb: 2,
                          transition: 'color 0.3s ease',
                          fontSize: '1.1rem',
                        }}
                      >
                        {process.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#64748b',
                          lineHeight: 1.5,
                          fontSize: '0.95rem',
                          flexGrow: 1,
                        }}
                      >
                        {process.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            );
          })}
        </Grid>

        {/* CTA Section */}
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '600ms' }}>
          <Paper
            elevation={0}
            sx={{
              mt: 8,
              background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
              borderRadius: '16px',
              p: 6,
              textAlign: 'center',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Ready to Get Started?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  opacity: 0.9,
                  mb: 4,
                  maxWidth: '32rem',
                  mx: 'auto',
                  fontSize: '1.25rem',
                }}
              >
                Join thousands of job seekers who found their perfect career opportunity through our platform.
              </Typography>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: 'white',
                  color: '#002D62',
                  fontWeight: 600,
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1.125rem',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                    transform: 'translateY(-2px) scale(1.05)',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                Submit Application
              </Button>
            </Box>
          </Paper>
        </Fade>
      </Container>

      <style jsx global>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </Box>
  );
};

export default WorkingProcess;