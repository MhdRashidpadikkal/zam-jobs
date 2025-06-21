 
'use client'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import React, { useState } from "react";

const AccordionMessage = () => {
 
  const [expandedId, setExpandedId] = useState<number | null>(1); // Default open accordion ID
 

  const faqs = [
    {
      id: 1,
      question: "Can I upload a CV?",
      answer:
        "Nunc sed at risus. Nibh nisl faucibus pretium luctus ultrices. Sit congue netus vitae sed eu dapibus. Felis eu ultricies sed massa. Commodo fringilla sed tempor risus lectus euismod.",
    },
    {
      id: 2,
      question: "How long will the recruitment process take?",
      answer: "",
    },
    {
      id: 3,
      question: "What does the recruitment and selection process involve?",
      answer: "",
    },
    {
      id: 4,
      question: "Do you recruit for Graduates, Apprentices and Students?",
      answer: "",
    },
    {
      id: 5,
      question:
        "Can I receive notifications for any future jobs that may interest me?",
      answer: "",
    },
  ];

  return (
    <Box sx={{textAlign:'center', mt: 3 }}>
      
       <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                      fontWeight: 700,
                      color: '#1a202c',
                      mb: 3,
                      lineHeight: 1.2,
                    }}
                  >
                     Frequently Asked{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      Questions
                    </Box>
                  </Typography>
      
         <Typography
                    variant="h6"
                    sx={{
                      color: '#64748b',
                      maxWidth: '48rem',
                      mx: 'auto',
                      lineHeight: 1.6,
                      fontSize: '1.25rem',
                      mb:3,
                    }}
                  >
                     At eu lobortis pretium tristique amet lacus ut senectus aliquet.
                    
                  </Typography>

      {faqs.map((faq) => {
        const isExpanded = expandedId === faq.id;
        return (
          <Accordion
            key={faq.id}
            expanded={isExpanded}
            onChange={() =>
              setExpandedId(isExpanded ? null : faq.id)
            }
            sx={{
              mb: 2,
              borderRadius: 2,
              backgroundColor: isExpanded ? "secondary.main" : "#fff",
              color: isExpanded ? "#fff" : "inherit",
              boxShadow: isExpanded ? 2 : 1,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: isExpanded ? "#fff" : "inherit" }} />}
              sx={{
                "& .MuiAccordionSummary-content": {
                  alignItems: "center",
                  fontWeight: 600,
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={2} width="100%">
                <Typography variant="subtitle1">
                  {String(faq.id).padStart(2, "0")}
                </Typography>
                <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>
                  {faq.question}
                </Typography>
                {isExpanded && (
                  <CheckCircleIcon sx={{ ml: "auto", color: "#fff" }} />
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color={isExpanded ? "#fff" : "text.secondary"}>
                {faq.answer || "Answer coming soon."}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionMessage;

