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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const toSubmit: JobFormData = {
      ...formData,
      start: formData.start
        ? new Date(formData.start).toLocaleDateString()
        : "",
      end: formData.end ? new Date(formData.end).toLocaleDateString() : "",
    };
    onSubmit(toSubmit);
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border border-slate-300 px-5 pt-5 rounded-4xl text-slate-700 bg-slate-50"
      >
        <div className="text-xl font-semibold">Work Experience</div>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={handleChange}
          value={formData.company}
          autoComplete="off"
          className="border h-7 py-2 px-1 rounded-lg"
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
          className="border h-7 py-2 px-1 rounded-lg"
          required
        />
        <div className="flex justify-around mb-2 mt-1">
          <div>
            <label className="font-semibold" htmlFor="start">
              start:
            </label>
            <input
              type="date"
              name="start"
              id="start"
              onChange={handleChange}
              value={formData.start}
              autoComplete="off"
              required
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="end">
              end:
            </label>
            <input
              type="date"
              name="end"
              id="end"
              onChange={handleChange}
              value={formData.end}
              autoComplete="off"
              required
            />
          </div>
        </div>
        <label htmlFor="location">location</label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={formData.location}
          className="border h-7 py-2 px-1 rounded-lg"
          autoComplete="off"
          required
        />
        <label htmlFor="description">description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          value={formData.description}
          className="border py-2 px-1 rounded-lg resize"
          rows={4}
          autoComplete="off"
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
    </div>
  );
}
