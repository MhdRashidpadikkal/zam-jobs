import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { RootState } from "@/store/store";
import { updateField } from "@/store/slices/formSlice";
import type { Files } from "@/store/slices/formSlice";


export default function Resume() {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state: RootState) => state.form);
  const handleChange = (
    section: 'files',
    field: keyof Files,
    value: File | null
  ) => {
    dispatch(updateField({ section, field, value }));
  };

  if (!formData) return null; // Add null check for formData
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
                        onChange={(e) =>
                          handleChange("files", "resume", e.target.files?.[0] || null)
                        }
                      />
                    </Button>
                    {formData?.files?.resume && (
                      <Typography variant="body2" mt={1}>
                        {formData?.files.resume.name}
                      </Typography>
                    )}
            </Grid>
       </Box>
        
    </>
  );
}
