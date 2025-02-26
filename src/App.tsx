import { useState } from "react";
import DetailsForm from "./components/formComponents/DetailsForm";
import EducationForm from "./components/formComponents/EducationForm";
import DetailsView from "./components/viewComponents/DetailsView";
import {
  DetailsFormData,
  EducationFormData,
  JobFormData,
} from "./components/types";
import EducationView from "./components/viewComponents/EducationView";
import JobForm from "./components/formComponents/JobForm";
import JobView from "./components/viewComponents/JobView";

function App() {
  const [detailsData, setDetailsData] = useState<DetailsFormData>({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "9999999999",
    address: "5 Sigma Lane, Olympus",
  });
  const handleDetailsSubmit = (data: DetailsFormData) => {
    setDetailsData(data);
  };

  const [educationData, setEducationData] = useState<EducationFormData>({
    school: "Hardverd",
    degree: "Rizzology, BS",
    date: "January 8",
    location: "Boston, MA",
  });

  const handleEducationSubmit = (data: EducationFormData) => {
    setEducationData(data);
  };

  const [jobData, setJobData] = useState<JobFormData[]>([
    {
      company: "Google",
      position: "Janitor",
      start: "January 19, 1876",
      end: "March 20, 2099",
      location: "Mongolia",
      description:
        "Performed extreme cleaning operations and what not and things and such. lorem ipsum and yeah haha",
    },
  ]);

  const handleJobSubmit = (newJob: JobFormData) => {
    setJobData([...jobData, newJob]);
  };

  return (
    <>
      <div className="border border-red-500 w-1/3">
        <DetailsForm onSubmit={handleDetailsSubmit} />
        <EducationForm onSubmit={handleEducationSubmit} />
        <JobForm onSubmit={handleJobSubmit} />
      </div>
      <div className="border border-blue-500 w-2/3">
        <DetailsView formData={detailsData} />
        <EducationView formData={educationData} />
        <JobView formData={jobData} />
      </div>
    </>
  );
}

export default App;
