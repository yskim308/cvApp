import { JobFormData, JobViewProps } from "../types";

export default function JobView({ formData, handleJobDelete }: JobViewProps) {
  const renderJobs = () => {
    return formData?.map((job: JobFormData) => {
      return (
        <li key={job.company}>
          <div className="flex justify-between">
            <div className="flex">
              <p className="font-semibold">{job.position},</p>
              <p className="pl-1">{job.company}</p>
              <p className="pl-3"> - {job.location}</p>
            </div>
            <div className="flex">
              <p>{job.start}</p>
              <p>{job.end}</p>
            </div>
          </div>
          <p>{job.description}</p>
          <button
            type="button"
            className="font-bold"
            onClick={() => {
              handleJobDelete(job);
            }}
          >
            delete
          </button>
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
