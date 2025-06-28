'use client'
import { Box, Button, Card, CardContent, Container, Step, StepLabel, Stepper, Typography, useTheme } from '@mui/material'
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
import SuccessAlert from './SucessMessage';
import { StepErrors } from '@/store/slices/formSlice';

const steps = ["Personal Information", "Qualification", "Experience", "Upload Resume"]

export default function ApplyForm() {
  const formData = useSelector((state: RootState) => state.form);
  const [stepErrors, setStepErrors] = useState<StepErrors>({});
  const [success, setSuccess] = useState(false)

  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()
  const handleBack = () => setActiveStep(activeStep - 1)
  const handleSubmit = () => {
    const formDataToSend = { ...formData }
    console.log("Submitting form data:", formDataToSend)

    // Later we'll send this to a backend
    setSuccess(true)
    setActiveStep(activeStep + 1)
  }
  
  const handleNext = () => {
  const errors: StepErrors = {}

  switch (activeStep) {
    case 0: {
      const personalInfoErrors = validatePersonalInfo(formData.personalInfo)

      // ✅ Only block if any field has a non-null error
      const hasErrors = Object.values(personalInfoErrors).some((v) => v !== null)

      if (hasErrors) {
        errors.personalInfo = personalInfoErrors
      }
      break
    }

    case 1: {
      const qualificationErrors = validateQualification(formData.higherQualification)

      if (Object.keys(qualificationErrors).length > 0) {
        errors.higherQualification = qualificationErrors
      }
      break
    }

    case 2: {
      const experienceErrors = validateExperience(formData.experience)

      if (Object.keys(experienceErrors).length > 0) {
        errors.experience = experienceErrors
      }
      break
    }
  }

  // ✅ Final check: block if errors object is not empty
  if (Object.keys(errors).length > 0) {
    setStepErrors(errors)
    return
  }

  // ✅ Clear errors and move to next step
  setStepErrors({})
  setActiveStep((prev) => prev + 1)
}


  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <PersonalDetails errors={stepErrors.personalInfo || { firstName: null, lastName: null, email: null, phone: null, whatsAppNo: null, place: null, preferredLocation: null }} />
      case 1:
        return <Qualification errors={stepErrors.higherQualification || { qualification: '', institute: '', yearCompleted: '' }} />
      case 2:
        return <Experience errors={stepErrors.experience || { currentCompany: '', currentPosition: '', yearsOfExperience: '', isfresher: '' }} />
      case 3:
        return <Resume />
      default:
        return null
    }
  }

  return (
    <>
      <Container maxWidth="md" sx={{ py: 5 }}>
        {success ? (
          <SuccessAlert />
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
              <Box component="form">
                {getStepContent(activeStep)}

                <Box sx={{ display: "flex", justifyContent: activeStep === 0 ? "end" : "space-between", mt: 5 }}>
                  <Button
                    onClick={handleBack}
                    disabled={activeStep === 0}
                    sx={{
                      display: activeStep === 0 ? "none" : "inline-flex",
                      px: 4,
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                    variant="contained"
                    sx={{
                      px: 4,
                      background: activeStep === steps.length - 1 
                        ? 'linear-gradient(135deg, #002D62 0%, #3B82F6 100%)' 
                        : theme.palette.primary.main,
                      color: "white",
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
