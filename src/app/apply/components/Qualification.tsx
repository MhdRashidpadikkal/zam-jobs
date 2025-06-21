import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import { updateField, resetForm } from "@/store/slices/formSlice";

export default function Qualification({ errors }: { errors: any }) {
  const dispatch = useDispatch();
  const formData = useSelector((state: RootState) => state.form);
  const handleChange = (
    section: any,
    field: string,
    value: string | File | boolean | null
  ) => {
    dispatch(updateField({ section, field, value }));
  };
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
              value={formData?.higherQualification.qualification}
              onChange={(e) =>
                handleChange("higherQualification", "qualification", e.target.value)
              }
              error={Boolean(errors?.qualification)}
              helperText={errors?.qualification}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Institute Name"
              name="institute"
              fullWidth
              value={formData?.higherQualification.institute}
              onChange={(e) =>
                handleChange("higherQualification", "institute", e.target.value)
              }
              error={Boolean(errors?.institute)}
              helperText={errors?.institute}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Year Completed"
              name="yearCompleted"
              fullWidth
              value={formData?.higherQualification.yearCompleted}
              onChange={(e) =>
                handleChange(
                  "higherQualification",
                  "yearCompleted",
                  e.target.value
                )
              }
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
