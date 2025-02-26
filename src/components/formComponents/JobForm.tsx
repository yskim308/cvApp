import { ChangeEvent, FormEvent, useState } from "react";
import { JobFormData, JobFormProps } from "../types";

export default function JobForm({ onSubmit }: JobFormProps) {
  const [formData, setFormData] = useState<JobFormData>({
    company: "",
    position: "",
    start: "",
    end: "",
    location: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      company: "",
      position: "",
      start: "",
      end: "",
      location: "",
      description: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="text-2xl font-semibold">Work Experience</div>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={handleChange}
          value={formData.company}
          autoComplete="off"
          required
        />
        <label htmlFor="position">position</label>
        <input
          type="text"
          name="position"
          id="position"
          onChange={handleChange}
          value={formData.position}
          autoComplete="off"
        />
        <label htmlFor="start">start</label>
        <input
          type="date"
          name="start"
          id="start"
          onChange={handleChange}
          value={formData.start}
          autoComplete="off"
          required
        />
        <label htmlFor="end">end</label>
        <input
          type="date"
          name="end"
          id="end"
          onChange={handleChange}
          value={formData.end}
          autoComplete="off"
          required
        />
        <label htmlFor="location">location</label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={formData.location}
          autoComplete="off"
        />
        <label htmlFor="description">description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          value={formData.description}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
