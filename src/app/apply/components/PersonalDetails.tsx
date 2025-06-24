import { Box, Divider, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import type { RootState } from "@/store/store";
import { updateField } from "@/store/slices/formSlice";
import type { PersonalInfo } from "@/store/slices/formSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

interface PersonalDetailsProps {
  errors: Record<keyof PersonalInfo, string | null>;
}

export default function PersonalDetails({ errors }: PersonalDetailsProps) {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state: RootState) => state.form);

  const handleChange = (
    section: "personalInfo",
    field: keyof PersonalInfo,
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
        Personal Details
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="First Name *"
              name="firstName"
              fullWidth
              value={formData.personalInfo.firstName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                  handleChange("personalInfo", "firstName", value);
                }
              }}
              inputProps={{ maxLength: 20 }}
              error={Boolean(errors?.firstName)}
              helperText={errors?.firstName || "Only letters allowed"}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Last Name"
              name="lastName"
              fullWidth
              value={formData.personalInfo.lastName}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[a-zA-Z\s]*$/.test(value) && value.length <= 20) {
                  handleChange("personalInfo", "lastName", value);
                }
              }}
              inputProps={{ maxLength: 20 }}
              helperText="Only letters allowed"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formData.personalInfo.email}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 50) {
                  handleChange("personalInfo", "email", value);
                }
              }}
              inputProps={{ maxLength: 50 }}
              error={Boolean(errors?.email)}
              helperText={errors?.email || "Enter a valid email address"}
            />
          </Grid>


          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Phone Number *"
              name="phone"
              fullWidth
              value={formData.personalInfo.phone}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 14) {
                  handleChange("personalInfo", "phone", value);
                }
              }}
              inputProps={{ maxLength: 14 }}
              error={Boolean(errors?.phone)}
              helperText={errors?.phone || "Only numbers allowed"}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="WhatsApp Number *"
              name="whatsAppNo"
              fullWidth
              value={formData.personalInfo.whatsAppNo}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 14) {
                  handleChange("personalInfo", "whatsAppNo", value);
                }
              }}
              inputProps={{ maxLength: 14 }}
              error={Boolean(errors?.whatsAppNo)}
              helperText={errors?.whatsAppNo || "Only numbers allowed"}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Place *"
              name="place"
              fullWidth
              value={formData.personalInfo.place}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 30) {
                  handleChange("personalInfo", "place", value);
                }
              }}
              inputProps={{ maxLength: 30 }}
              error={Boolean(errors?.place)}
              helperText={errors?.place || "Max 30 characters"}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <TextField
              label="Preferred Location"
              name="preferredLocation"
              fullWidth
              value={formData.personalInfo.preferredLocation}
              onChange={(e) => {
                const value = e.target.value;
                if (value.length <= 30) {
                  handleChange("personalInfo", "preferredLocation", value);
                }
              }}
              inputProps={{ maxLength: 30 }}
              helperText="Max 30 characters"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
