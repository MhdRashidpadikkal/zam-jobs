import { Box, Button, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { updateField, resetForm } from "@/store/slices/formSlice";

export default function Resume ({ errors }: { errors: any }) {
    const dispatch=useDispatch();
    const formData=useSelector((state :RootState)=>state.form);
    const handleChange=(section:any,field:string,value:string |File |boolean|null)=>{
        dispatch(updateField({ section, field, value }))}
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
