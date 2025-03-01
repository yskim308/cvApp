import { useState } from "react";
import { JobFormData, JobViewProps } from "../types";

export default function JobView({ formData, handleJobDelete }: JobViewProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const renderJobs = () => {
    return formData?.map((job: JobFormData) => {
      return (
        <li
          key={job.company}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="flex justify-between">
            <div className="flex">
              <p className="font-semibold">{job.position},</p>
              <p className="pl-1">{job.company}</p>
              <p className="pl-3"> - {job.location}</p>
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
                delete
              </button>
            </div>
          </div>
          <p>{job.description}</p>
        </li>
      );
    });
  };
  return (
    <>
      <div className="text-xl font-medium mt-4">Work Experience</div>
      <hr></hr>
      <ul>{renderJobs()}</ul>
    </>
  );
}
