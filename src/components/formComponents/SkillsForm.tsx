import { ChangeEvent, FormEvent, useState } from "react";
import { SkillsFormProps, SkillsFormData } from "../types";

export default function SkillsForm({ appendSkill }: SkillsFormProps) {
  const [formData, setFormData] = useState<SkillsFormData>({
    skill: "",
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
    appendSkill(formData);
    setFormData({
      skill: "",
      description: "",
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border border-slate-300 my-3 px-5 pt-5 rounded-4xl text-slate-700 bg-slate-50"
      >
        <div className="text-xl font-semibold">Skills</div>
        <label htmlFor="skill">Skill</label>
        <input
          name="skill"
          id="skill"
          type="text"
          onChange={handleChange}
          value={formData.skill}
          autoComplete="off"
          className="border h-7 py-2 px-1 rounded-lg"
          required
        />
        <label htmlFor="description">Description</label>
        <input
          name="description"
          id="description"
          type="text"
          onChange={handleChange}
          value={formData.description}
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
    </div>
  );
}
