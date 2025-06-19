"use client";

import { Box, Typography, Container, Stepper, Step, StepLabel, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Alert, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

const steps = ['Personal Information', 'Education', 'Experience', 'Upload Resume'];

export default function ApplyPage() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      position: '',
      preferredLocation: '',
    },
    education: {
      degree: '',
      university: '',
      graduationYear: '',
      gpa: '',
    },
    experience: {
      currentCompany: '',
      currentPosition: '',
      yearsOfExperience: '',
      skills: '',
    },
    files: {
      resume: null,
      portfolio: null,
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleChange = (section: string, field: string, value: string | File | null) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically make an API call to submit the form data
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="First Name"
                value={formData.personal.firstName}
                onChange={(e) => handleChange('personal', 'firstName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label="Last Name"
                value={formData.personal.lastName}
                onChange={(e) => handleChange('personal', 'lastName', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Email Address"
                type="email"
                value={formData.personal.email}
                onChange={(e) => handleChange('personal', 'email', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                value={formData.personal.phone}
                onChange={(e) => handleChange('personal', 'phone', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Location"
                value={formData.personal.location}
                onChange={(e) => handleChange('personal', 'location', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Preferred Position"
                value={formData.personal.position}
                onChange={(e) => handleChange('personal', 'position', e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Degree"
                value={formData.education.degree}
                onChange={(e) => handleChange('education', 'degree', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="University/College"
                value={formData.education.university}
                onChange={(e) => handleChange('education', 'university', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Graduation Year"
                type="number"
                value={formData.education.graduationYear}
                onChange={(e) => handleChange('education', 'graduationYear', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="GPA"
                value={formData.education.gpa}
                onChange={(e) => handleChange('education', 'gpa', e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Current Company"
                value={formData.experience.currentCompany}
                onChange={(e) => handleChange('experience', 'currentCompany', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Current Position"
                value={formData.experience.currentPosition}
                onChange={(e) => handleChange('experience', 'currentPosition', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Years of Experience"
                type="number"
                value={formData.experience.yearsOfExperience}
                onChange={(e) => handleChange('experience', 'yearsOfExperience', e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Skills (comma separated)"
                value={formData.experience.skills}
                onChange={(e) => handleChange('experience', 'skills', e.target.value)}
              />
            </Grid>
          </Grid>
        );
      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Resume</InputLabel>
                <Select
                  value={formData.files.resume ? formData.files.resume.name : ''}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleChange('files', 'resume', file);
                    }
                  }}
                  inputProps={{
                    accept: '.pdf,.doc,.docx',
                    type: 'file'
                  }}
                >
                  <MenuItem value="">
                    <em>Choose a file...</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Portfolio (Optional)</InputLabel>
                <Select
                  value={formData.files.portfolio ? formData.files.portfolio.name : ''}
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      handleChange('files', 'portfolio', file);
                    }
                  }}
                  inputProps={{
                    accept: '.pdf,.doc,.docx',
                    type: 'file'
                  }}
                >
                  <MenuItem value="">
                    <em>Choose a file...</em>
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        );
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {success ? (
        <Alert severity="success" sx={{ mb: 4 }}>
          Your application has been submitted successfully!
        </Alert>
      ) : (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 4, color: theme.palette.primary.main }}>
            Job Application
          </Typography>
          
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <Box component="form" onSubmit={handleSubmit}>
            {getStepContent(activeStep)}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  backgroundColor: theme.palette.secondary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  }
                }}
              >
                Back
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.main,
                    }
                  }}
                >
                  {isSubmitting ? <CircularProgress size={24} /> : 'Submit Application'}
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.secondary.main,
                    }
                  }}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Paper>
      )}
    </Container>
  );
}
