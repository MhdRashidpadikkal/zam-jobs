'use client'
import { Box, Button, Card, CardContent, Container, Step, StepLabel, Stepper, Typography, useTheme, Alert, AlertTitle } from '@mui/material'
import {
  validatePersonalInfo,
  validateQualification,
  validateExperience,
} from "@/utils/formValidation";

import React, { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import Experience from './Experience'
import Qualification from './Qualification'
import Resume from './Resume'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
// import SuccessAlert from './SucessMessage'; // We'll handle success message differently
import { StepErrors } from '@/store/slices/formSlice';
import { supabase } from '@/lib/supabaseClient';
import PaymentInstructionsPage from './PaymentInstructionsPage'; // Import the new component

const steps = ["Personal Information", "Qualification", "Experience", "Upload Resume"]

export default function ApplyForm() {
  const formData = useSelector((state: RootState) => state.form);
  const [stepErrors, setStepErrors] = useState<StepErrors>({});
  const [success, setSuccess] = useState(false)
  const [localResume, setLocalResume] = useState<File | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state for temporary success alert


  const [activeStep, setActiveStep] = useState(0)
  const theme = useTheme()
  const handleBack = () => setActiveStep(activeStep - 1)
  const handleSubmit = async () => {
  // const formDataToSend = { ...formData };

    try {
      let resumeUrl: string | null = null;

      // Upload resume if selected
      if (localResume) {
        const fileExt = localResume.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, localResume);

          if (uploadError) {
            throw uploadError;
          }
            
        const { data: publicUrlData } = supabase
          .storage
          .from('resumes')
          .getPublicUrl(fileName);

        resumeUrl = publicUrlData?.publicUrl ?? null;
      }

      const { data: { user } } = await supabase.auth.getUser()

      // Insert form data to Supabase DB
      const { error: insertError } = await supabase.from('job_applications').insert([
        {
          user_id: user?.id,
          first_name: formData.personalInfo.firstName,
          last_name: formData.personalInfo.lastName,
          email: formData.personalInfo.email,
          phone: formData.personalInfo.phone,
          whatsapp_no: formData.personalInfo.whatsAppNo,
          place: formData.personalInfo.place,
          preferred_location: formData.personalInfo.preferredLocation,

          qualification: formData.higherQualification.qualification,
          institute: formData.higherQualification.institute,
          year_completed: formData.higherQualification.yearCompleted,

          current_company: formData.experience.currentCompany,
          current_position: formData.experience.currentPosition,
          years_of_experience: formData.experience.yearsOfExperience,
          is_fresher: formData.experience.isfresher,

          resume_url: resumeUrl,
        },
      ]);

      if (insertError) throw insertError;

      setSuccess(true); // This will now trigger the PaymentInstructionsPage
      setShowSuccessMessage(true); // Show the temporary success alert
      // Optionally hide the success message after a few seconds
      setTimeout(() => setShowSuccessMessage(false), 5000); 

      // You might not want to advance the step here if PaymentInstructionsPage is rendered as a full page
      // setActiveStep(activeStep + 1); 
    } catch (err) {
      console.error('Form submission error:', err);
      // Handle error, maybe show an error alert
    }
  };
  
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
        return <Resume setLocalResume={setLocalResume} />
      default:
        return null
    }
  }

  return (
    <>
      <Container maxWidth="md" sx={{ py: 5 }}>
        {showSuccessMessage && ( // Render temporary success message
          <Alert
            severity="success"
            variant="outlined"
            sx={{
              mb: 4,
              border: '1px solid',
              borderColor: 'success.main',
              backgroundColor: '#E6F9F3',
              color: 'success.main',
              borderRadius: 2,
              fontFamily: 'var(--font-inter), "Inter", sans-serif',
              boxShadow: '0 2px 10px rgba(0, 179, 131, 0.15)',
            }}
          >
            <AlertTitle
              sx={{
                fontWeight: 600,
                fontSize: '1.25rem',
                color: 'success.main',
              }}
            >
              Success
            </AlertTitle>
            Your application has been <strong>submitted successfully!</strong>
          </Alert>
        )}

        {success ? ( // Conditional rendering for PaymentInstructionsPage
          <PaymentInstructionsPage />
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