"use client";

import { Container, Typography } from '@mui/material';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
  variant="h2" 
  component="h2" 
  sx={{
    fontSize: 64,
    fontWeight: 500,
    color: "primary.main",
    textAlign: "center",
  }}
>
  How our platform makes your job search easier
</Typography>
      <Hero />
    </Container>
  );
}
