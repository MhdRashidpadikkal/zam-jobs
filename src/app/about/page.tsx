"use client";

import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Person } from '@mui/icons-material';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      description: "Experienced entrepreneur with 15 years in tech industry."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      description: "Product design expert with a focus on user experience."
    },
    {
      name: "Mike Brown",
      role: "Lead Developer",
      description: "Senior software engineer specializing in web technologies."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4}}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, color: 'primary.main', textDecoration: 'none' }}>
        About Us
      </Typography>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Our Mission
      </Typography>
      <Typography paragraph sx={{ mb: 4 }}>
        At Zam Jobs, we are dedicated to connecting talented professionals with exciting opportunities. Our mission is to revolutionize the job search experience by providing a seamless and efficient platform for both job seekers and employers.
      </Typography>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Our Team
      </Typography>
      <Grid container spacing={4}>
        {teamMembers.map((member, index) => (
          <Grid key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}>
                    <Person sx={{ fontSize: 40 }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {member.name}
                  </Typography>
                  <Typography color="text.secondary">
                    {member.role}
                  </Typography>
                </Box>
                <Typography paragraph>
                  {member.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
