import type { FormState } from "@/store/slices/formSlice";

export const validatePersonalInfo = (data: FormState["personalInfo"]) => {
  const errors: Partial<Record<keyof FormState["personalInfo"], string>> = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.whatsAppNo.trim()) errors.whatsAppNo = "whatsApp number is required";
  if (!data.place.trim()) errors.place = "Place is required";

  return errors;
};

export const validateQualification = (data: FormState["higherQualification"]) => {
  const errors: Partial<Record<keyof FormState["higherQualification"], string>> = {};

  if (!data.qualification.trim()) errors.qualification = "Qualification is required";
  if (!data.institute.trim()) errors.institute = "Institute is required";

  return errors;
};

export const validateExperience = (data: FormState["experience"]) => {
  const errors: Partial<Record<keyof FormState["experience"], string>> = {};

  if (!data.isfresher && !data.currentCompany.trim()) {
    errors.currentCompany = "Company is required";
  }

  return errors;
};

export const validateResume = (data: FormState["files"]) => {
  const errors: { resume?: string } = {};

  if (!data?.resume) errors.resume = "Resume is required";

  return errors;
};
