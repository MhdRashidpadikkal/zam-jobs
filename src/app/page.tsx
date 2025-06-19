import { Container, Typography } from '@mui/material';
import Hero from '@/components/Hero';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zam Job",
  description: "Job portal and management system",
};

export default function Home() {
  return (
    <Container maxWidth="lg"  sx={
      {
        bgcolor: 'red'
      }
    } >
      <Hero />
    </Container>
  );
}
