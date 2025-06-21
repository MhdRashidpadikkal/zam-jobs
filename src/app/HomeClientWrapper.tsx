'use client';

import { Container, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HomeClientWrapper({ children }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth={isMobile ? 'lg' : 'xl'}>
      {children}
    </Container>
  );
}
