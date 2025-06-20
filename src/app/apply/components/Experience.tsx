import { Box, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { updateField, resetForm } from "@/store/slices/formSlice";

export default function Experience ({ errors }: { errors: any }) {
    const dispatch=useDispatch();
    const formData=useSelector((state :RootState)=>state.form);
    const handleChange=(section:any,field:string,value:string |File |boolean|null)=>{
        dispatch(updateField({ section, field, value }))}
  return (
    <>
        <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
                  Experience
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Current Company"
                    name="currentCompany"
                    fullWidth value={formData?.experience.currentCompany}
                    onChange={(e)=>handleChange("experience","currentCompany",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Current Position"
                    name="currentPosition"
                    fullWidth value={formData?.experience.currentPosition}
                    onChange={(e)=>handleChange("experience","currentPosition",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Experience (in years)"
                    name="yearsOfExperience"
                    fullWidth value={formData?.experience.yearsOfExperience}
                    onChange={(e)=>handleChange("experience","yearsOfExperience",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="I am a Fresher"
                    name="isfresher"
                    fullWidth value={formData?.experience.isfresher}
                    onChange={(e)=>handleChange("experience","isfresher",e.target.value)} />
                </Grid>
                
            </Grid>
       </Box>
        
    </>
  );
}
