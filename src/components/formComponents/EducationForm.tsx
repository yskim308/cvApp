import { ChangeEvent, FormEvent, useState } from "react";

export interface EducationFormData {
  school: string;
  degree: string;
  date: string;
  location: string;
}

export default function EducationForm() {
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
        required
      />
      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="degree"
        onChange={handleChange}
        value={formData.degree}
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
        required
      />
      <button type="submit">submit</button>
    </form>
  );
}
