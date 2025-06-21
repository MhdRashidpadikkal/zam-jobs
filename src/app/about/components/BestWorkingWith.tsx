import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";

const BestWorkingWith = () => {
  return (
    <Box sx={{ py: 10,mt:10, backgroundColor: "#f9fafb" }}>
      <Container>
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          {/* Text Section */}
           
          <Grid size={{xs:12,md:6}}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              We Help People Build Meaningful Careers
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              From job seekers to recruiters, we aim to bridge the gap with
              smart solutions that empower both sides. Whether you're starting
              fresh or looking for the next step, our platform ensures a
              smoother hiring journey.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              We combine industry knowledge, innovation, and community insight
              to help you achieve your career goals. Join the thousands who’ve
              found opportunities with our platform.
            </Typography>
          </Grid>

          {/* Image Section */}
          <Grid size={{xs:12,md:6,lg:6}} >
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BestWorkingWith;
