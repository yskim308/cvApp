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
    const submissionData = {
      ...formData,
      date: formData.date ? new Date(formData.date).toLocaleDateString() : "",
    };
    onSubmit(submissionData);
    setFormData({
      school: "",
      degree: "",
      date: "",
      location: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border border-slate-300 px-5 pt-5 rounded-4xl text-slate-900 my-3"
    >
      <div className="text-xl font-semibold">Education</div>
      <label htmlFor="school">School Name</label>
      <input
        type="text"
        name="school"
        id="school"
        onChange={handleChange}
        value={formData.school}
        autoComplete="off"
        className="border h-7 py-2 px-1 rounded-lg"
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
        className="border h-7 py-2 px-1 rounded-lg"
        required
      />
      <label htmlFor="date">Graduation Date</label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={handleChange}
        value={formData.date}
        className="border h-7 py-2 px-1 rounded-lg"
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        onChange={handleChange}
        value={formData.location}
        autoComplete="off"
        className="border h-7 py-2 px-1 rounded-lg"
        required
      />
      <div className="flex justify-center p-1">
        <button
          type="submit"
          className="border border-slate-400 p-1 rounded-xl text-slate-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
