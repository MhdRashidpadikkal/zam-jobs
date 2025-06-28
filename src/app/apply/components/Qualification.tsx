import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import type { RootState } from "@/store/store";
import { updateField } from "@/store/slices/formSlice";
import type { HigherQualification } from "@/store/slices/formSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface QualificationProps {
  errors: Record<keyof HigherQualification, string>;
}

export default function Qualification({ errors }: QualificationProps) {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state: RootState) => state.form);

  const handleChange = (
    section: "higherQualification",
    field: keyof HigherQualification,
    value: string
  ) => {
    dispatch(updateField({ section, field, value }));
  };

  if (!formData) return null;

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        fontWeight="bold"
        color="primary.dark"
      >
        Higher Qualification
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Qualification"
              name="qualification"
              fullWidth
              value={formData.higherQualification.qualification}
              onChange={(e) =>
                handleChange(
                  "higherQualification",
                  "qualification",
                  e.target.value
                )
              }
              inputProps={{ maxLength: 50 }}
              error={Boolean(errors?.qualification)}
              helperText={errors?.qualification}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Institute Name"
              name="institute"
              fullWidth
              value={formData.higherQualification.institute}
              onChange={(e) =>
                handleChange(
                  "higherQualification",
                  "institute",
                  e.target.value
                )
              }
              inputProps={{ maxLength: 50 }}
              error={Boolean(errors?.institute)}
              helperText={errors?.institute}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Year Completed"
              name="yearCompleted"
              fullWidth
              value={formData.higherQualification.yearCompleted}
              onChange={(e) =>
                handleChange(
                  "higherQualification",
                  "yearCompleted",
                  e.target.value
                )
              }
              inputProps={{ maxLength: 50 }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
