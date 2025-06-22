import type { FormState } from "@/store/slices/formSlice";

export const validatePersonalInfo = (data: FormState["personalInfo"]) => {
  const errors: Record<keyof FormState["personalInfo"], string | null> = {
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    whatsAppNo: null,
    place: null,
    preferredLocation: null,
  };

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.whatsAppNo.trim()) errors.whatsAppNo = "whatsApp number is required";
  if (!data.place.trim()) errors.place = "Place is required";

  return errors as Record<keyof FormState["personalInfo"], string | null>;
};

export const validateQualification = (data: FormState["higherQualification"]) => {
  const errors: Record<keyof FormState["higherQualification"], string> = {
    qualification: "",
    institute: "",
    yearCompleted: "",
  };

  if (!data.qualification.trim()) errors.qualification = "Qualification is required";
  if (!data.institute.trim()) errors.institute = "Institute is required";
  if (!data.yearCompleted.trim()) errors.yearCompleted = "Year completed is required";

  // Remove empty error messages
  return Object.fromEntries(Object.entries(errors).filter(([, value]) => value !== "")) as Record<keyof FormState["higherQualification"], string>;
};

export const validateExperience = (data: FormState["experience"]) => {
  const errors: Record<keyof FormState["experience"], string> = {
    currentCompany: "",
    currentPosition: "",
    yearsOfExperience: "",
    isfresher: "",
  };

  if (!data.isfresher && !data.currentCompany.trim()) {
    errors.currentCompany = "Company is required";
  }
  if (!data.isfresher && !data.currentPosition.trim()) {
    errors.currentPosition = "Current position is required";
  }
  if (!data.isfresher && !data.yearsOfExperience.trim()) {
    errors.yearsOfExperience = "Years of experience is required";
  }

  // Remove empty error messages
  return Object.fromEntries(Object.entries(errors).filter(([, value]) => value !== "")) as Record<keyof FormState["experience"], string>;
};

// export const validateResume = (data: FormState["files"]) => {
//   const errors: { resume?: string } = {};

//   if (!data?.resume) errors.resume = "Resume is required";

//   return errors;
// };
