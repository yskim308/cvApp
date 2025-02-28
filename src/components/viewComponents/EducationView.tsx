import { EducationViewProps } from "../types";
import location from "../../assets/map-marker.svg";
import graduationIcon from "../../assets/graduationIcon.svg";

export default function EducationView({ formData }: EducationViewProps) {
  return (
    <div className="flex flex-col mt-5">
      <div className="text-xl font-medium">Education</div>
      <hr></hr>
      <div className="flex justify-between">
        <div className="flex">
          <span className="font-semibold">{formData?.school}</span> -{" "}
          {formData?.degree}
        </div>
        <div className="flex">
          <div className="flex">
            <img className="w-5" src={location} />
            {formData?.location}
          </div>
          <div className="px-5 flex">
            <img className="w-5 mr-1" src={graduationIcon} />
            {formData?.date}
          </div>
        </div>
      </div>
    </div>
  );
}
