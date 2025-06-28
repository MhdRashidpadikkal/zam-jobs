'use client';

import React from 'react';
import { Box, styled, keyframes } from '@mui/material';

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

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  overflow: 'hidden',
  zIndex: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: `${pulse} 4s ease-in-out infinite`,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(80px)',
    animation: `${pulse} 4s ease-in-out infinite 2s`,
  },
  [theme.breakpoints.down('md')]: {
    '&::before, &::after': {
      width: '200px',
      height: '200px',
    },
  },
}));

const FloatingElement = styled(Box)<{ top: string; left: string; delay: string }>(
  ({ theme, top, left, delay }) => ({
    position: 'absolute',
    top,
    left,
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
    borderRadius: '50%',
    filter: 'blur(1px)',
    animation: `${float} 6s ease-in-out infinite ${delay}`,
    [theme.breakpoints.down('md')]: {
      width: '40px',
      height: '40px',
    },
  })
);

const AuthBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      <FloatingElement top="20%" left="15%" delay="0s" />
      <FloatingElement top="60%" left="80%" delay="2s" />
      <FloatingElement top="80%" left="20%" delay="4s" />
      <FloatingElement top="30%" left="70%" delay="1s" />
      <FloatingElement top="50%" left="5%" delay="3s" />
    </BackgroundContainer>
  );
};

export default AuthBackground;