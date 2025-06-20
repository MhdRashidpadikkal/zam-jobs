
import { Container,} from "@mui/material";
import AccordionMessage from "@/app/about/components/AccordionMessage";
// import Works from "@/components/About/Works";
 
import BlogSection from "@/app/about/components/BlogSection";
import BestWorkingWith from "@/app/about/components/BestWorkingWith";
import TopFirms from "@/app/about/components/TopFirms";
import AboutFirst from "@/app/about/components/AboutFirst";
 
 
export default function AboutPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 3 }}>
      <AboutFirst />
     <AccordionMessage />
     <TopFirms />
      <BestWorkingWith />
     <BlogSection />
     </Container>
    
 
  
  );
}
