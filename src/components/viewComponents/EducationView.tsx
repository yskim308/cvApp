import { EducationViewProps } from "../types";

export default function EducationView({ formData }: EducationViewProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">Education</div>
      <div>School: {formData?.school}</div>
      <div>Degree: {formData?.degree}</div>
      <div>Date: {formData?.date}</div>
      <div>Location: {formData?.location}</div>
    </div>
  );
}
