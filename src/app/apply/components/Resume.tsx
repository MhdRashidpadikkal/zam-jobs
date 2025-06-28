import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

interface ResumeProps {
  setLocalResume: React.Dispatch<React.SetStateAction<File | null>>;
}

export default function Resume({ setLocalResume }: ResumeProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setLocalResume(file);
  };

  return (
    <>
        <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
                  Upload Resume
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                    >
                      Upload Resume
                      <input
                        type="file"
                        hidden
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                      />
                    </Button>
            </Grid>
       </Box>
        
    </>
  );
}
