"use client";

import { Box, Typography, Container, Button, useTheme, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  BusinessCenter,
  Work,
  People,
  TrendingUp,
} from '@mui/icons-material';
import Header from './Header';

const ButtonWithRotate = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
    >
      <Button
        variant="outlined"
        sx={{
          textTransform: 'none',
          borderRadius: 2,
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          minWidth: 160,
          height: 50,
          '&:hover': {
            borderColor: theme.palette.primary.dark,
            color: theme.palette.primary.dark,
          }
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
};

const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      textAlign: 'center',
      borderRadius: 2,
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
      }
    }}
  >
    <Box sx={{ color: 'primary.main', fontSize: '2.5rem', mb: 1 }}>{icon}</Box>
    <Typography variant="h4" sx={{ mb: 1, fontWeight: 'bold' }}>{value}</Typography>
    <Typography variant="body1" color="text.secondary">{label}</Typography>
  </Paper>
);

export default function Hero() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
  variant="h2" 
  component="h2" 
  sx={{
    fontSize: 64,
    fontWeight: 500,
    color: "primary.main",
    textAlign: "center",
  }}
>
  How our platform makes your job search easier
</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 4,
          minHeight: '60vh',
          backgroundColor:'red'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              mb: 4,
              color: theme.palette.primary.main,
              fontWeight: 'bold',
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Find Your Dream Job
          </Typography>
        </motion.div>

        <Header />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: theme.palette.text.secondary,
              maxWidth: '600px'
            }}
          >
            Discover exciting opportunities in your field. Connect with top employers and start your journey to success.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                borderRadius: 2,
                minWidth: 160,
                height: 50,
                fontSize: '1rem',
                '&:hover': {
                  transform: 'translateY(-2px)'
                }
              }}
            >
              View Jobs
            </Button>
          </motion.div>

          <ButtonWithRotate>
            Apply Now
          </ButtonWithRotate>
        </Box>

        <Box sx={{ mt: 6, width: '100%' }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid size={{xs: 12, sm: 12, md: 3}}>
              <StatCard
                icon={<BusinessCenter sx={{ fontSize: '3rem' }} />}
                value="1,200+"
                label="Active Companies"
              />
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 3}}>
              <StatCard
                icon={<Work sx={{ fontSize: '3rem' }} />}
                value="5,000+"
                label="Job Openings"
              />
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 3}}>
              <StatCard
                icon={<People sx={{ fontSize: '3rem' }} />}
                value="10,000+"
                label="Happy Employees"
              />
            </Grid>
            <Grid size={{xs: 12, sm: 12, md: 3}}>
              <StatCard
                icon={<TrendingUp sx={{ fontSize: '3rem' }} />}
                value="95%"
                label="Placement Rate"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
