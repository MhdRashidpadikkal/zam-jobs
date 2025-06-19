import { Box, Divider, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { updateField, resetForm } from "@/store/slices/formSlice";

export default function PersonalDetails () {
    const dispatch=useDispatch();
    const formData=useSelector((state :RootState)=>state.form);
    const handleChange=(section:any,field:string,value:string |File |boolean|null)=>{
        dispatch(updateField({ section, field, value }))}
  return (
    <>
        <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
                  Personal Details
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="First Name *" name="firstName" fullWidth value={formData.personalInfo.firstName} onChange={(e)=>handleChange("personalInfo","firstName",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Last Name" name="lastName" fullWidth value={formData.personalInfo.lastName} onChange={(e)=>handleChange("personalInfo","lastName",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Email" name="email" fullWidth value={formData.personalInfo.email} onChange={(e)=>handleChange("personalInfo","email",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Phone Number *" name="phone" fullWidth value={formData.personalInfo.phone} onChange={(e)=>handleChange("personalInfo","phone",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="WhatsApp Number *" name="whatsAppNo" fullWidth value={formData.personalInfo.whatsAppNo} onChange={(e)=>handleChange("personalInfo","whatsAppNo",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="Place *" name="place" fullWidth value={formData.personalInfo.place} onChange={(e)=>handleChange("personalInfo","place",e.target.value)} />
                </Grid>
                <Grid size={{xs:12,sm:6,md:4}}>
                    <TextField label="PreferredLocation" name="preferredLocation" fullWidth value={formData.personalInfo.preferredLocation} onChange={(e)=>handleChange("personalInfo","preferredLocation",e.target.value)} />
                </Grid>
            </Grid>
       </Box>
        
    </>
  );
}
