import { useState } from "react";
import { JobFormData, JobViewProps } from "../types";
import location from "../../assets/map-marker.svg";

export default function JobView({ formData, handleJobDelete }: JobViewProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const renderJobs = () => {
    return formData?.map((job: JobFormData) => {
      return (
        <li key={job.company} className="mb-5">
          <div className="flex justify-between">
            <div className="flex">
              <p className="font-semibold">{job.position},</p>
              <p className="pl-1">{job.company}</p>
              <div className="flex pl-2">
                <img src={location} className="w-4" />
                <p>{job.location}</p>
              </div>
            </div>
            <div className="flex">
              <p className="pr-1">{job.start}</p>
              <p> - </p>
              <p className="pl-1">{job.end}</p>
              <button
                type="button"
                className={`font-bold px-3 text-red-500 ${hovered ? "" : "hidden"}`}
                onClick={() => {
                  handleJobDelete(job);
                }}
              >
                x
              </button>
            </div>
          </div>
          <p className="whitespace-pre-line">{job.description}</p>
        </li>
      );
    });
  };
  return (
    <>
      <div className="text-xl font-medium mt-4">Work Experience</div>
      <hr className="mb-1"></hr>
      <ul
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {renderJobs()}
      </ul>
    </>
  );
}
