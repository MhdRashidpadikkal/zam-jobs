import { Alert, AlertTitle } from "@mui/material";

export default function SuccessAlert() {
  return (
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
  );
}
