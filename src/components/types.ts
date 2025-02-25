export interface EducationFormData {
  school: string;
  degree: string;
  date: string;
  location: string;
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
