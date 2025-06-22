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
  Fade,
  Slide,
  alpha,
  styled,
  keyframes,
} from '@mui/material';
import {
  People,
  Visibility,
  EmojiObjects,
  ArrowForward,
  Security,
  HandshakeOutlined,
} from '@mui/icons-material';

interface ValueCardProps {
    gradient: string;
  }

// Keyframes for animations
const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Styled components
const BackgroundBox = styled(Box)(() => ({
  position: 'absolute',
  inset: 0,
  opacity: 0.4,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: `${pulse} 4s ease-in-out infinite`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '20%',
    right: '15%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(100px)',
    animation: `${pulse} 4s ease-in-out infinite 2s`,
  },
}));

const FloatingElement = styled(Box)(() => ({
  position: 'absolute',
  bottom: '15%',
  left: '5%',
  width: '200px',
  height: '200px',
  background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
  borderRadius: '50%',
  filter: 'blur(60px)',
  animation: `${float} 6s ease-in-out infinite`,
}));

const GradientText = styled(Typography)(() => ({
  background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}));

const HeroCard = styled(Card)(() => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.2)',
  },
}));



const ValueCard = styled(Card)<ValueCardProps>(({ theme, gradient }) => ({
  background: gradient,
  color: 'white',
  borderRadius: '16px',
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100px',
    height: '100px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    transform: 'translate(30px, -30px)',
  },
}));



const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  const values = [
    {
      icon: Security,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication and reliable service.',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
    },
    {
      icon: EmojiObjects,
      title: 'Innovation',
      description: 'Continuously evolving our platform to meet changing market needs.',
      gradient: 'linear-gradient(135deg, #3B82F6 0%, #10B981 100%)',
    },
    {
      icon: People,
      title: 'People First',
      description: 'Putting people at the center of everything we do, from candidates to clients.',
      gradient: 'linear-gradient(135deg, #10B981 0%, #F59E0B 100%)',
    },
    {
      icon: HandshakeOutlined,
      title: 'Partnership',
      description: 'Creating mutually beneficial relationships that drive success for all parties.',
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #8B5CF6 100%)',
    },
  ];


  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        py: 8,
      }}
    >
      {/* Background Elements */}
      <BackgroundBox />
      <FloatingElement />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <Fade in={isVisible} timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Chip
              label="ABOUT ZAAM JOB MEDIATE"
              sx={{
                backgroundColor: alpha('#002D62', 0.1),
                color: '#002D62',
                border: `1px solid ${alpha('#002D62', 0.2)}`,
                fontWeight: 600,
                mb: 4,
                px: 3,
                py: 1,
                fontSize: '0.875rem',
              }}
            />
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '4rem', lg: '5rem' },
                fontWeight: 800,
                color: '#1a202c',
                mb: 3,
                lineHeight: 1.1,
              }}
            >
              Connecting Dreams with{' '}
              <GradientText variant="inherit">
                Opportunities
              </GradientText>
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#64748b',
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                mb: 6,
                fontWeight: 400,
              }}
            >
              We are more than just a job mediation platform. We are dream builders, 
              career architects, and the bridge between talent and opportunity. 
              Our mission is to transform lives through meaningful employment connections.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                sx={{
                  background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                  color: 'white',
                  fontWeight: 600,
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1.125rem',
                  boxShadow: '0 8px 25px rgba(0, 45, 98, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 35px rgba(0, 45, 98, 0.4)',
                  },
                }}
              >
                Join Our Journey
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: '#002D62',
                  color: '#002D62',
                  fontWeight: 600,
                  px: 4,
                  py: 2,
                  borderRadius: '12px',
                  textTransform: 'none',
                  fontSize: '1.125rem',
                  borderWidth: '2px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: alpha('#002D62', 0.05),
                    borderWidth: '2px',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Fade>


        {/* Mission & Vision */}
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '500ms' }}>
          <Grid container spacing={4} sx={{ mb: 10 }}>
            <Grid size={{xs:12,md:6}}>
              <HeroCard sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Visibility sx={{ fontSize: '2rem', color: '#002D62', mr: 2 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a202c' }}>
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      fontSize: '1.125rem',
                      flexGrow: 1,
                    }}
                  >
                    To be the world&apos;s most trusted platform where every individual finds their 
                    perfect career match and every organization discovers exceptional talent that 
                    drives their success forward.
                  </Typography>
                </CardContent>
              </HeroCard>
            </Grid>
            <Grid size={{xs:12,md:6}}>
              <HeroCard sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <EmojiObjects sx={{ fontSize: '2rem', color: '#3B82F6', mr: 2 }} />
                    <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a202c' }}>
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#64748b',
                      lineHeight: 1.7,
                      fontSize: '1.125rem',
                      flexGrow: 1,
                    }}
                  >
                    To revolutionize the job market by creating meaningful connections between 
                    talented individuals and forward-thinking companies, fostering growth and 
                    success for all stakeholders in the process.
                  </Typography>
                </CardContent>
              </HeroCard>
            </Grid>
          </Grid>
        </Fade>

        {/* Core Values */}
        <Fade in={isVisible} timeout={1000} style={{ transitionDelay: '700ms' }}>
          <Box sx={{ mb: 10 }}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 700,
                color: '#1a202c',
                mb: 2,
              }}
            >
              Our Core Values
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: '#64748b',
                mb: 6,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              The principles that guide every decision we make and every relationship we build
            </Typography>

            <Grid container spacing={4}>
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Grid size={{xs:12,sm:6,md:3}} key={index}>
                    <Slide
                      direction="up"
                      in={isVisible}
                      timeout={700}
                      style={{ transitionDelay: `${800 + index * 150}ms` }}
                    >
                      <ValueCard gradient={value.gradient}>
                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                          <Icon
                            sx={{
                              fontSize: '3rem',
                              mb: 2,
                              opacity: 0.9,
                            }}
                          />
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              mb: 2,
                            }}
                          >
                            {value.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              opacity: 0.9,
                              lineHeight: 1.6,
                            }}
                          >
                            {value.description}
                          </Typography>
                        </Box>
                      </ValueCard>
                    </Slide>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Fade>

                     
      </Container>
    </Box>
  );
};

export default AboutHero;