import Hero from '@/components/Hero';
import type { Metadata } from "next";
import HomeClientWrapper from '@/app/HomeClientWrapper';
import BrandMarquee from '@/components/home/BrandMarquee';
import WhyChooseUs from '@/components/home/WhyChooseUs';
// import AboutPage from './about/page';

export const metadata: Metadata = {
  title: "Zam Job",
  description: "Job portal and management system",
};

export default function Home() {
  
  return (
    <HomeClientWrapper>
      <Hero />
      <BrandMarquee />
      <WhyChooseUs />
    </HomeClientWrapper>
  );
}