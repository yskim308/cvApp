import { EducationViewProps } from "../types";
import location from "../../assets/map-marker.svg";
import graduationIcon from "../../assets/graduationIcon.svg";
import { useState } from "react";

export default function EducationView({
  formData,
  handleEducationDelete,
}: EducationViewProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className="flex flex-col mt-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-xl font-medium">Education</div>
      <hr></hr>
      {formData?.map((school) => {
        return (
          <div className={`flex justify-between`}>
            <div className="flex">
              <button
                type="button"
                className={`text-red-500 font-bold pr-3 ${hovered ? "" : "hidden"}`}
                onClick={() => handleEducationDelete(school)}
              >
                x
              </button>
              <span className="font-semibold">{school?.school}</span> -{" "}
              {school?.degree}
              <div className="flex text-xs font-light items-center px-3">
                <img className="w-3" src={location} />
                {school?.location}
              </div>
            </div>
            <div className="flex items-center">
              <div className="pl-5 flex">
                <img className="w-5 mr-1" src={graduationIcon} />
                {school?.date}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
