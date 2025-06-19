'use client'
import { Alert, Box, Button, Card, CardContent, Container, Step, StepLabel, Stepper, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import PersonalDetails  from './PersonalDetails'
import Experience from './Experience'
import Qualification from './Qualification'
import Resume from './Resume'

const steps = ["Personal Information", "Qualification", "Experience", "Upload Resume"]

export default function ApplyPage() {
  
  const [activeStep,setActiveStep]=useState(0)
  const theme=useTheme()
  const handleBack=()=>setActiveStep(activeStep - 1)
  const handleNext=()=>setActiveStep(activeStep + 1)
  const getStepContent=(step:number)=>{
    switch (step) {
      case 0:
        return (
          <PersonalDetails/>
        )
      case 1:
        return (
          <Qualification/>
        )
      case 2:
        return (
          <Experience/>
        )
      case 3:
        return (
          <Resume/>
        )
      }
  }
  
  const isSuccess=false
  return (
    <>
        <Container maxWidth="md" sx={{ py: 5 }}>
          {isSuccess ? (
                  <Alert severity="success" sx={{ mb: 4 }}>
                    Your application has been submitted successfully!
                  </Alert>
          ) : (
            <Card elevation={6} sx={{ borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h4" component="h1" sx={{ mb: 4, color: theme.palette.primary.main, textAlign: "center" }}>
                  Job Application
                </Typography>
                <Stepper activeStep={activeStep} sx={{ mb: 4 }} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <Box component="form" >
                  {getStepContent(activeStep)}
                  
                  
                  
                  

                  <Box sx={{ display: "flex", justifyContent:activeStep === 0? "end": "space-between", mt: 5 }}>
                    <Button
                      onClick={handleBack}
                      disabled={activeStep === 0}
                      sx={{
                        display: activeStep === 0 ? "none" : "inline-flex",
                        px: 4,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        '&:hover': {
                          backgroundColor: theme.palette.secondary.main,
                        },
                      }}
                    >
                       Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      variant="contained"
                      sx={{
                        px: 4,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        '&:hover': {
                          backgroundColor: theme.palette.secondary.main,
                        },
                      }}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
                

              </CardContent>

            </Card>
          )}
        </Container>
    </>
  )
}
