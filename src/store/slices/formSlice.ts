import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    whatsAppNo:string;
    place: string;
    preferredLocation: string;
  };
  higherQualification: {
    qualification:string;
    institute:string;
    yearCompleted:string;
  };
  experience: {
    currentCompany: string;
    currentPosition: string;
    yearsOfExperience: string;
    isfresher:boolean;
  };
  files?: {
    resume: File | null;
  };
}

const initialState: FormState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    whatsAppNo:'',
    place: '',
    preferredLocation: '',
  },
  higherQualification: {
    qualification:'',
    institute:'',
    yearCompleted:'',
  },
  experience: {
    currentCompany: '',
    currentPosition: '',
    yearsOfExperience: '',
    isfresher:false,
  },
  files: {
    resume: null,
  },
};


export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{
     section: keyof FormState,
     field: string,
     value: string | File | boolean | null
   }>) => {
     const { section, field, value } = action.payload;
     (state[section] as any)[field] = value;
   },
    
    resetForm: () => initialState
  }
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
