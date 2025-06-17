"use client";

import { Box, Typography, Container, TextField, Button, Paper, Select, Grid, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function ContactPage() {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 4, color: theme.palette.primary.main, textDecoration: 'none' }}>
        Contact Us
      </Typography>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Subject</InputLabel>
              <Select
                label="Subject"
                defaultValue=""
              >
                <MenuItem value="">Select Subject</MenuItem>
                <MenuItem value="job_inquiry">Job Inquiry</MenuItem>
                <MenuItem value="general">General Inquiry</MenuItem>
                <MenuItem value="feedback">Feedback</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.main,
                }
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
