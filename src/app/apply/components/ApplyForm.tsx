'use client'
import { Alert, Box, Button, Card, CardContent, Container, Step, StepLabel, Stepper, Typography, useTheme } from '@mui/material'
import {
  validatePersonalInfo,
  validateQualification,
  validateExperience,
  // validateResume,
} from "@/utils/formValidation";

import React, { useState } from 'react'
import PersonalDetails  from './PersonalDetails'
import Experience from './Experience'
import Qualification from './Qualification'
import Resume from './Resume'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

const steps = ["Personal Information", "Qualification", "Experience", "Upload Resume"]

export default function ApplyForm() {
  const formData = useSelector((state: RootState) => state.form);
  const [stepErrors, setStepErrors] = useState<any>({});
  const [success,setSucess]=useState(false)

  const [activeStep,setActiveStep]=useState(0)
  const theme=useTheme()
  const handleBack=()=>setActiveStep(activeStep - 1)
  const handleSubmit = () => {
  const formDataToSend = { ...formData }; // Grab from Redux if needed
  console.log("Submitting form data:", formDataToSend);

  // Later we’ll send this to a backend
  setSucess(true)
  setActiveStep(activeStep + 1); // For now show success message
};
  
  const handleNext = () => {
  let errors = {};
  switch (activeStep) {
    case 0:
      errors = validatePersonalInfo(formData.personalInfo);
      break;
    case 1:
      errors = validateQualification(formData.higherQualification);
      break;
    case 2:
      errors = validateExperience(formData.experience);
      break;
    // case 3:
    //   errors = validateResume(formData.files);
    //   break;
  }

  if (Object.keys(errors).length > 0) {
    setStepErrors(errors);
    return; // Do not proceed if there are errors
  }

  setStepErrors({});
  setActiveStep((prev) => prev + 1);
};


  const getStepContent=(step:number)=>{
    switch (step) {
      case 0:
        return (
          <PersonalDetails errors={stepErrors}/>
        )
      case 1:
        return (
          <Qualification errors={stepErrors}/>
        )
      case 2:
        return (
          <Experience errors={stepErrors}/>
        )
      case 3:
        return (
          <Resume/>
        )
      }
  }
  
  const isSuccess=success
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
                <Stepper activeStep={activeStep} sx={{ mb: 4}} alternativeLabel>
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
                      onClick={activeStep === steps.length - 1 ? handleSubmit  : handleNext}
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
                      {activeStep === steps.length - 1 ? "Submit" : "Next"}
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
