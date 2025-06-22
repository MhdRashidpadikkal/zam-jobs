
import { Container,} from "@mui/material";
import AccordionMessage from "@/app/about/components/AccordionMessage"; 
import BlogSection from "@/app/about/components/BlogSection";
import BestWorkingWith from "@/app/about/components/BestWorkingWith";
import TopFirms from "@/app/about/components/TopFirms";
import AboutHero from "./components/AboutHero";
import WorkingProcess from "./components/WorkingProcess";
 
 
export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <AboutHero />
      <WorkingProcess />
     <AccordionMessage />
      <TopFirms /> 
      <BestWorkingWith />
     <BlogSection />
     </Container>
    
 
  
  );
}
