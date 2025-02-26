import { JobFormData, JobViewProps } from "../types";

export default function JobView({ formData }: JobViewProps) {
  const renderJobs = () => {
    return formData?.map((job: JobFormData) => {
      return (
        <li>
          <p>{job.company}</p>
          <p>{job.position}</p>
          <p>{job.start}</p>
          <p>{job.end}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
        </li>
      );
    });
  };
  return (
    <>
      <div className="text-2xl font-semibold">Work Experience</div>
      <ul>{renderJobs()}</ul>
    </>
  );
}
