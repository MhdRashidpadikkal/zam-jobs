import React from "react";
import { Box, Typography, Container } from "@mui/material";

const BestWorkingWith = () => {
  return (
    <Box sx={{ py: 10,mt:10, backgroundColor: "#f9fafb" }}>
      <Container>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={6}>
          {/* Text Section */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              We Help People Build Meaningful Careers
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              From job seekers to recruiters, we aim to bridge the gap with
              smart solutions that empower both sides. Whether you&apos;re starting
              fresh or looking for the next step, our platform ensures a
              smoother hiring journey.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We combine industry knowledge, innovation, and community insight
              to help you achieve your career goals. Join the thousands who&apos;ve
              found opportunities with our platform.
            </Typography>
          </Box>

          {/* Image Section */}
          <Box sx={{ 
            width: { xs: '100%', md: '50%', lg: '50%' },
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Box
              component="img"
              src="/images/career.jpg"
              alt="About us"
              sx={{
                width: "100%",
                height: "100%",
                maxHeight: { xs: 250, sm: 350, md: 400 },
                objectFit: "cover",
                borderRadius: 4,
                boxShadow: 3,
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BestWorkingWith;
