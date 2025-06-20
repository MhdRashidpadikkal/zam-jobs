'use client';

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Link as MuiLink,
  TextField,
  Button,
} from '@mui/material';


const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0F172A', 
        pt: 8,
        pb: 4,
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Brand & Mission */}

          <Grid size={{
            xs:12, md:3
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              ZamJob
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: '22rem' }}>
              Connecting job seekers with meaningful opportunities through a smart, fast, and friendly experience.
            </Typography>
          </Grid>

          {/* Job Types */}
          <Grid size = {{
            xs: 6, sm: 4, md: 2
          }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Job Types
            </Typography>
            {['Full-Time', 'Part-Time', 'Contract', 'Internship'].map(type => (
              <MuiLink
                key={type}
                href="#"
                underline="none"
                sx={{
                  display: 'block',
                  color: 'white',
                  opacity: 0.75,
                  mb: 1,
                  fontSize: '0.95rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {type}
              </MuiLink>
            ))}
          </Grid>

          {/* Company Links */}
          <Grid size = {{
            xs:6, sm:4, md:2
          }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Company
            </Typography>
            {['About', 'Careers', 'Contact', 'Blog'].map(link => (
              <MuiLink
                key={link}
                href="#"
                underline="none"
                sx={{
                  display: 'block',
                  color: 'white',
                  opacity: 0.75,
                  mb: 1,
                  fontSize: '0.95rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {link}
              </MuiLink>
            ))}
          </Grid>

          {/* Resources */}
          <Grid size={{
            xs:6, sm:4, md:2
          }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Resources
            </Typography>
            {['Help Center', 'Privacy Policy', 'Terms of Service', 'Support'].map(link => (
              <MuiLink
                key={link}
                href="#"
                underline="none"
                sx={{
                  display: 'block',
                  color: 'white',
                  opacity: 0.75,
                  mb: 1,
                  fontSize: '0.95rem',
                  '&:hover': { opacity: 1, textDecoration: 'underline' },
                }}
              >
                {link}
              </MuiLink>
            ))}
          </Grid>

          {/* Subscribe Section */}
          <Grid size={{
            xs:12, sm:6, md:3
          }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
              Subscribe for Updates
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.75, mb: 2 }}>
              Get the latest job alerts and news straight to your inbox.
            </Typography>
            <Box
              component="form"
              onSubmit={(e) => e.preventDefault()}
              sx={{ display: 'flex', gap: 1, flexDirection: { xs: 'column', sm: 'row' } }}
            >
              <TextField
                type="email"
                placeholder="Your email"
                size="small"
                variant="outlined"
                sx={{
                  bgcolor: 'white',
                  borderRadius: 1,
                  flex: 1,
                  input: { color: '#0F172A' },
                }}
              />
              <Button
                variant="contained"
                size="small"
                type="submit"
                sx={{
                  backgroundColor: '#3B82F6',
                  color: 'white',
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#2563EB',
                  },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center', fontSize: '0.875rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} ZamJob. Designed with care for job seekers.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
