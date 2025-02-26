export interface EducationFormData {
  school: string;
  degree: string;
  date: string;
  location: string;
}

export interface EducationFormProps {
  onSubmit: (data: EducationFormData) => void;
}

export interface EducationViewProps {
  formData?: EducationFormData;
}

export interface DetailsFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface DetailsFormProps {
  onSubmit: (data: DetailsFormData) => void;
}

export interface DetailsViewProps {
  formData?: DetailsFormData;
}
