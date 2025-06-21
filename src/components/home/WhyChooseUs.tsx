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
  useTheme,
  alpha,
  styled,
  keyframes,
} from '@mui/material';
import {
  Security,
  FlashOn,
  People,
  ArrowForward,
  CheckCircle,
  Schedule,
  GpsFixed,
  Star,
  Phone,
  Email,
  Language,
  Work,
  Business,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Styled components for custom animations
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const BackgroundBox = styled(Box)(({ theme }) => ({
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
    filter: 'blur(60px)',
    animation: `${pulse} 3s ease-in-out infinite`,
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
    filter: 'blur(60px)',
    animation: `${pulse} 3s ease-in-out infinite 1s`,
  },
  [theme.breakpoints.down('md')]: {
    '&::before, &::after': {
      width: '12rem',
      height: '12rem',
    },
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const FeatureCard = styled(Card)(({ theme, color }) => ({
  position: 'relative',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(16px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    '& .feature-icon': {
      transform: 'scale(1.1)',
    },
    '& .feature-title': {
      color: '#8B5CF6',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '16px',
    background: `linear-gradient(135deg, ${alpha(color, 0.2)} 0%, ${alpha('#3B82F6', 0.2)} 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: -1,
    filter: 'blur(20px)',
  },
  '&:hover::after': {
    opacity: 1,
  },
}));

const IconContainer = styled(Box)(({ theme, bgcolor }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  background: `linear-gradient(135deg, ${bgcolor} 0%, ${alpha(bgcolor, 0.8)} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  marginLeft: 'auto',
  marginRight: 'auto',
  transition: 'transform 0.3s ease',
  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.2)',
    transition: 'background 0.3s ease',
  },
}));

const StatsCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(3),
  background: 'rgba(255, 255, 255, 0.8)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.15)',
  },
}));

const ServiceCard = styled(Card)(({ theme, gradient }) => ({
  background: gradient,
  color: 'white',
  padding: theme.spacing(4),
  borderRadius: '16px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
}));

const CTACard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
  color: 'white',
  padding: theme.spacing(6),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '16px',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.1)',
  },
}));

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      id: 1,
      icon: Security,
      title: "Trustworthiness",
      description: "Honest and transparent services with a proven track record of successful placements and satisfied clients.",
      color: "#8B5CF6",
      delay: 0,
      highlights: ["100% Transparent Process", "Verified Companies", "Secure Platform"]
    },
    {
      id: 2,
      icon: FlashOn,
      title: "Lightning Speed",
      description: "We help you find jobs and candidates quickly with our efficient matching algorithm and dedicated support team.",
      color: "#3B82F6",
      delay: 150,
      highlights: ["Quick Responses", "Fast Matching", "Immediate Notifications"]
    },
    {
      id: 3,
      icon: People,
      title: "Simple Process",
      description: "Easy registration and streamlined process to access opportunities. No complicated procedures or endless paperwork.",
      color: "#10B981",
      delay: 300,
      highlights: ["One-Click Apply", "Easy Registration", "User-Friendly Interface"]
    },
    {
      id: 4,
      icon: GpsFixed,
      title: "Perfect Matching",
      description: "We connect job seekers with opportunities that match their qualifications and help employers find the right talent.",
      color: "#F59E0B",
      delay: 450,
      highlights: ["Skill-Based Matching", "Quality Candidates", "Perfect Fit Guarantee"]
    }
  ];

  const stats = [
    { number: "5000+", label: "Jobs Placed", icon: CheckCircle },
    { number: "2000+", label: "Happy Clients", icon: Star },
    { number: "24/7", label: "Support Available", icon: Schedule },
    { number: "98%", label: "Success Rate", icon: Security }
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        py: 10,
        mt: 10,
      }}
    >
      {/* Background decorative elements */}
      <BackgroundBox />
      
      {/* Additional floating background element */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '24rem',
          height: '24rem',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: `${pulse} 4s ease-in-out infinite 2s`,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Header Section */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip
              label="WHY CHOOSE ZAAM JOB MEDIATE"
              sx={{
                backgroundColor: alpha('#002D62', 0.1),
                color: '#002D62',
                border: `1px solid ${alpha('#002D62', 0.2)}`,
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
                fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 700,
                color: '#1a202c',
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              Your Dream Job is{' '}
              <GradientText component="span" variant="inherit">
                Just a Call Away
              </GradientText>
            </Typography>
            
            <Typography
              variant="h6"
              sx={{
                color: '#64748b',
                maxWidth: '64rem',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: '1.25rem',
              }}
            >
              Whether you're searching for the perfect job opportunity or looking to hire exceptional talent, 
              ZAAM JOB MEDIATE connects dreams with opportunities through our trusted, fast, and simple approach.
            </Typography>
          </Box>
        </Fade>

        {/* Stats Section */}
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '300ms' }}>
          <Grid container spacing={3} sx={{ mb: 8 }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Grid size={{xs: 6, md: 3}} key={index}>
                  <StatsCard>
                    <CardContent sx={{ p: 0 }}>
                      <Icon sx={{ fontSize: '2rem', color: '#002D62', mb: 1 }} />
                      <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a202c', mb: 0.5 }}>
                        {stat.number}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </StatsCard>
                </Grid>
              );
            })}
          </Grid>
        </Fade>

        {/* Features Grid */}
        <Box sx={{ position: 'relative', mb: 8 }}>
          {/* Connecting lines for desktop */}
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
                  animation: `${pulse} 2s ease-in-out infinite`,
                }}
              />
            </svg>
          </Box>

          <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2 }}>
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Grid size={{xs: 12, sm: 6, lg: 3}} key={feature.id}>
                  <Slide
                    direction="up"
                    in={isVisible}
                    timeout={700}
                    style={{ transitionDelay: `${feature.delay}ms` }}
                  >
                    <FeatureCard color={feature.color}>
                      <CardContent sx={{ p: 4, textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Icon */}
                        <IconContainer className="feature-icon" bgcolor={feature.color}>
                          <Icon sx={{ fontSize: '2rem', color: 'white', zIndex: 1 }} />
                        </IconContainer>

                        {/* Content */}
                        <Typography
                          variant="h6"
                          className="feature-title"
                          sx={{
                            fontWeight: 700,
                            color: '#1a202c',
                            mb: 2,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#64748b',
                            lineHeight: 1.6,
                            mb: 3,
                            flexGrow: 1,
                          }}
                        >
                          {feature.description}
                        </Typography>

                        {/* Highlights */}
                        <Box sx={{ textAlign: 'left' }}>
                          {feature.highlights.map((highlight, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <CheckCircle sx={{ fontSize: '1rem', color: '#10B981', mr: 1, flexShrink: 0 }} />
                              <Typography variant="caption" sx={{ color: '#4a5568' }}>
                                {highlight}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </CardContent>
                    </FeatureCard>
                  </Slide>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Services Section */}
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '600ms' }}>
          <Grid container spacing={4} sx={{ mb: 8 }}>
            {/* For Job Seekers */}
            <Grid size={{xs: 12, md: 6}}>
              <ServiceCard gradient="linear-gradient(135deg, #002D62 0%, #3B82F6 100%)">
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <People sx={{ fontSize: '2rem', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      For Job Seekers
                    </Typography>
                  </Box>
                  <Box sx={{ space: 2 }}>
                    {[
                      "Find job opportunities that match your qualifications and interests",
                      "Connect with reliable companies offering quality vacancies",
                      "Get closer to your dream job with our affordable service fee"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <CheckCircle sx={{ fontSize: '1.25rem', mr: 2, mt: 0.25, color: '#4ade80' }} />
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>

            {/* For Employers */}
            <Grid size={{xs: 12, md: 6}}>
              <ServiceCard gradient="linear-gradient(135deg, #8B5CF6 0%, #F59E0B 100%)">
                <CardContent sx={{ p: 0, height: '220px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, }}>
                    <Business sx={{ fontSize: '2rem', mr: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      For Employers
                    </Typography>
                  </Box>
                  <Box sx={{ space: 1 }}>
                    {[
                      "Identify talented candidates who meet your specific requirements",
                      "Bring the best talent into your team with our screening process",
                      "Save time and resources with our efficient recruitment solutions"
                    ].map((item, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                        <CheckCircle sx={{ fontSize: '1.25rem', mr: 2, mt: 0.25, color: '#4ade80' }} />
                        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                          {item}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          </Grid>
        </Fade>

        {/* Contact CTA Section */}
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '800ms' }}>
          <CTACard>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                Ready to Build Your Future?
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
                Join thousands of successful job placements and let us connect you with your perfect opportunity today.
              </Typography>
              
              {/* Contact Information */}
              <Grid container spacing={3} sx={{ mb: 4, justifyContent: 'center' }}>
                <Grid size={{xs: 12, sm: 4}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <Phone sx={{ fontSize: '1.25rem', mr: 1 }} />
                    <Typography variant="body1">+91 9656786330</Typography>
                  </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <Email sx={{ fontSize: '1.25rem', mr: 1 }} />
                    <Typography variant="body1">zaamjobmediate@gmail.com</Typography>
                  </Box>
                </Grid>
                <Grid size={{xs: 12, sm: 4}}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255, 255, 255, 0.9)' }}>
                    <Language sx={{ fontSize: '1.25rem', mr: 1 }} />
                    <Typography variant="body1">www.zaamjobmediate.com</Typography>
                  </Box>
                </Grid>
              </Grid>

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
                Contact Us Now
              </Button>
            </Box>
          </CTACard>
        </Fade>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;