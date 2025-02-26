import { ChangeEvent, FormEvent, useState } from "react";
import { EducationFormData, EducationFormProps } from "../types";

export default function EducationForm({ onSubmit }: EducationFormProps) {
  const [formData, setFormData] = useState<EducationFormData>({
    school: "",
    degree: "",
    date: "",
    location: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormData({
      school: "",
      degree: "",
      date: "",
      location: "",
    });
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="text-3xl font-semibold">Education</div>
      <label htmlFor="school">School Name</label>
      <input
        type="text"
        name="school"
        id="school"
        onChange={handleChange}
        value={formData.school}
        autoComplete="off"
        required
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        onChange={handleChange}
        value={formData.degree}
        autoComplete="off"
        required
      />
      <label htmlFor="date">Graduation Date</label>
      <input type="date" name="date" id="date" />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        onChange={handleChange}
        value={formData.location}
        autoComplete="off"
        required
      />
      <button type="submit">submit</button>
    </form>
  );
}
