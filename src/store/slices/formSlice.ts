import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AllUpdatePayloads =
  | UpdatePayload<'personalInfo'>
  | UpdatePayload<'higherQualification'>
  | UpdatePayload<'experience'>
  | UpdatePayload<'files'>;


// Section interfaces
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsAppNo: string;
  place: string;
  preferredLocation: string;
}

export interface HigherQualification {
  qualification: string;
  institute: string;
  yearCompleted: string;
}

export interface Experience {
  currentCompany: string;
  currentPosition: string;
  yearsOfExperience: string;
  isfresher: boolean;
}

export interface Files {
  resume: File | null;
}

export interface StepErrors {
  personalInfo?: Record<keyof PersonalInfo, string | null>;
  higherQualification?: Record<keyof HigherQualification, string>;
  experience?: Record<keyof Experience, string>;
  files?: Record<keyof Files, string>;
}

// Form state
export interface FormState {
  personalInfo: PersonalInfo;
  higherQualification: HigherQualification;
  experience: Experience;
  files: Files;
}

// ✅ Strong and flexible payload type
export type UpdatePayload<T extends keyof FormState> = {
  section: T;
  field: keyof FormState[T];
  value: FormState[T][keyof FormState[T]];
};


// Initial state
const initialState: FormState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsAppNo: '',
    place: '',
    preferredLocation: '',
  },
  higherQualification: {
    qualification: '',
    institute: '',
    yearCompleted: '',
  },
  experience: {
    currentCompany: '',
    currentPosition: '',
    yearsOfExperience: '',
    isfresher: false,
  },
  files: {
    resume: null,
  },
};

// ✅ Standalone type-safe reducer function
function updateFieldReducer(
  state: FormState,
  action: PayloadAction<AllUpdatePayloads>
) {
  const { section, field, value } = action.payload;
  const sectionState = state[section];

  if (
    sectionState &&
    typeof sectionState === 'object' &&
    field in sectionState
  ) {
    // @ts-expect-error: value type matches dynamic field
    sectionState[field] = value;
  }
}



// Slice using non-generic call
export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // 🔥 Use wrapper without generic type directly
    updateField: updateFieldReducer,
    resetForm() {
      return initialState;
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
