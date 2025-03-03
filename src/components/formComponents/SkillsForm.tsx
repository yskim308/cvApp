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
      <form onSubmit={handleSubmit}>
        <label htmlFor="skill">Skill</label>
        <input
          name="skill"
          id="skill"
          type="text"
          onChange={handleChange}
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
          autoComplete="off"
          className="border h-7 py-2 px-1 rounded-lg"
          required
        />
      </form>
    </div>
  );
}
