import { Box } from '@mui/material';
import Hero from '@/components/Hero';
import type { Metadata } from "next";
// import AboutPage from './about/page';

export const metadata: Metadata = {
  title: "Zam Job",
  description: "Job portal and management system",
};

export default function Home() {
  return (
    <Box>
      <Hero />
    </Box>
  );
}
