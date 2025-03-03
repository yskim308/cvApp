import { useState } from "react";
import { SkillsFormData, SkillsViewProps } from "../types";

interface SkillProps {
  skill: SkillsFormData;
  handleDelete: (skill: SkillsFormData) => void;
}

function Skill({ skill, handleDelete }: SkillProps) {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="flex"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p>{skill.skill}:</p>
      <p>{skill.description}</p>
      <button
        className={`text-red-500 ${hover ? "" : "hidden"}`}
        type="button"
        onClick={() => handleDelete}
      >
        delete
      </button>
    </div>
  );
}

export default function SkillsView({ data, handleDelete }: SkillsViewProps) {
  return (
    <div>
      {data.map((skill) => {
        return <Skill skill={skill} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
