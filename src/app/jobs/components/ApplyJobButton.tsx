import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Typography,
  Alert,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Send } from '@mui/icons-material';

interface ApplyJobButtonProps {
  jobTitle: string;
  companyName: string;
}

const ApplyJobButton: React.FC<ApplyJobButtonProps> = ({ jobTitle, companyName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '', coverLetter: '' });
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the application to your backend
    console.log('Application submitted:', { jobTitle, companyName, ...formData });
    setSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        startIcon={<Send />}
        onClick={handleOpen}
        sx={{
          py: 1.5,
          px: 4,
          fontWeight: 600,
          textTransform: 'none',
          fontSize: '1.1rem',
          borderRadius: 2,
        }}
      >
        Apply for this Job
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        fullScreen={isMobile}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Apply for {jobTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {companyName}
          </Typography>
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ pt: 2 }}>
            {submitted ? (
              <Alert severity="success" sx={{ mb: 2 }}>
                Your application has been submitted successfully! We&apos;ll get back to you soon.
              </Alert>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Full Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange('name')}
                  fullWidth
                />
                
                <TextField
                  label="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  fullWidth
                />
                
                <TextField
                  label="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange('phone')}
                  fullWidth
                />
                
                <TextField
                  label="Cover Letter"
                  multiline
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange('coverLetter')}
                  fullWidth
                  placeholder="Tell us why you're interested in this position..."
                />
              </Box>
            )}
          </DialogContent>

          <DialogActions sx={{ p: 3, pt: 1 }}>
            <Button onClick={handleClose} disabled={submitted}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={submitted || !formData.name || !formData.email}
              sx={{ fontWeight: 600 }}
            >
              {submitted ? 'Submitted!' : 'Submit Application'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default ApplyJobButton; 