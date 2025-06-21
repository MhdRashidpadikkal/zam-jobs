import Hero from '@/components/Hero';
import type { Metadata } from "next";
import HomeClientWrapper from '@/app/HomeClientWrapper';
import ReviewCard from '@/components/ReviewCard';
// import AboutPage from './about/page';

export const metadata: Metadata = {
  title: "Zam Job",
  description: "Job portal and management system",
};

export default function Home() {
  
  return (
    <HomeClientWrapper>
      <Hero />
      <ReviewCard/>
    </HomeClientWrapper>
  );
}