'use client';

import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
  Grid as MuiGrid,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Grid = styled(MuiGrid)({
  '&': {
    width: '100%',
  },
});

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import type { RootState } from "@/store/store";
import { updateField } from "@/store/slices/formSlice";
import type { UpdatePayload, Experience } from '@/store/slices/formSlice';

interface ExperienceProps {
  errors: Record<keyof Experience, string>;
}

export default function Experience({ errors }: ExperienceProps): React.ReactElement | null {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state: RootState) => state.form.experience) as Experience;

  const handleChange = (
    field: keyof Experience,
    value: string | boolean
  ) => {
    const payload: UpdatePayload<'experience'> = {
      section: 'experience' as const,
      field,
      value,
    } satisfies UpdatePayload<'experience'>;

    dispatch(updateField(payload));
  };

  if (!formData) return null;

  return (
    <Box>
      <Typography variant="h6" gutterBottom fontWeight="bold" color="primary.dark">
        Experience Details
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid sx={{ width: '100%' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.isfresher}
                onChange={(e) => handleChange('isfresher', e.target.checked)}
              />
            }
            label="I am a fresher"
          />
        </Grid>

        {!formData.isfresher && (
          <>
            <Grid sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Current Company"
                name="currentCompany"
                value={formData.currentCompany}
                onChange={(e) => handleChange('currentCompany', e.target.value)}
                inputProps={{ maxLength: 50 }}
                error={!!errors.currentCompany}
                helperText={errors.currentCompany || 'Max 50 characters'}
              />
            </Grid>
            <Grid sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Current Position"
                name="currentPosition"
                value={formData.currentPosition}
                onChange={(e) => handleChange('currentPosition', e.target.value)}
                inputProps={{ maxLength: 50 }}
                error={!!errors.currentPosition}
                helperText={errors.currentPosition || 'Max 50 characters'}
              />
            </Grid>
            <Grid sx={{ width: '100%' }}>
              <TextField
                fullWidth
                label="Years of Experience"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={(e) => {
                  const val = e.target.value;
                  if (/^\d{0,2}$/.test(val)) {
                    handleChange('yearsOfExperience', val);
                  }
                }}
                inputProps={{ maxLength: 2 }}
                error={!!errors.yearsOfExperience}
                helperText={errors.yearsOfExperience || 'Only numbers allowed, max 2 digits'}
              />
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
}
