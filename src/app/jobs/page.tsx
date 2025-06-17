"use client";

import { Box, Typography, Container, Grid, Card, CardContent, Button, useTheme } from '@mui/material';

export default function JobsPage() {
  const theme = useTheme();
  const jobList = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      location: "New York",
      type: "Part-time"
    },
    {
      title: "Product Manager",
      company: "ProductCraft",
      location: "San Francisco",
      type: "Full-time"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, color: 'primary.main', textDecoration: 'none' }}>
        Available Jobs
      </Typography>

      <Grid container spacing={4}>
        {jobList.map((job, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {job.title}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  {job.company}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Location: {job.location}
                </Typography>
                <Typography color="text.secondary" paragraph>
                  Type: {job.type}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.main,
                    }
                  }}
                >
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
