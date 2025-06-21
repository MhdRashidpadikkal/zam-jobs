import Hero from '@/components/Hero';
import type { Metadata } from "next";
import HomeClientWrapper from '@/app/HomeClientWrapper';
// import AboutPage from './about/page';

export const metadata: Metadata = {
  title: "Zam Job",
  description: "Job portal and management system",
};

export default function Home() {
  
  return (
    <HomeClientWrapper>
      <Hero />
    </HomeClientWrapper>
  );
}