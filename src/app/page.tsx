"use client";

import { Box, Typography } from '@mui/material';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h2" 
        component="h2" 
        sx={{
          fontSize: { xs: 32, sm: 48, md: 64 },
          fontWeight: 500,
          color: "primary.main",
          textAlign: "center",
          px: 2,
        }}
      >
        How our platform makes your job search easier
      </Typography>
      <Hero />
    </Box>
  );
}