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
      className="flex justify-between"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex">
        <button
          className={`pr-3 text-red-500 font-bold ${hover ? "" : "hidden"}`}
          type="button"
          onClick={() => handleDelete(skill)}
        >
          x
        </button>
        <p className="font-semibold mr-1">{skill.skill}:</p>
        <p>{skill.description}</p>
      </div>
    </div>
  );
}

export default function SkillsView({ data, handleDelete }: SkillsViewProps) {
  return (
    <div className="mt-5">
      <div className="text-xl font-medium">Skills</div>
      <hr></hr>
      {data.map((skill) => {
        return <Skill skill={skill} handleDelete={handleDelete} />;
      })}
    </div>
  );
}
