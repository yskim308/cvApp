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
  formData?: EducationFormData[];
  handleEducationDelete: (schoolToDelete: EducationFormData) => void;
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

export interface JobFormData {
  company: string;
  position: string;
  start: string;
  end: string;
  location: string;
  description: string;
}

export interface JobFormProps {
  onSubmit: (data: JobFormData) => void;
}

export interface JobViewProps {
  formData?: JobFormData[];
  handleJobDelete: (jobToDelete: JobFormData) => void;
}
