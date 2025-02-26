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
    {
      company: "SigmaboySigmaboy",
      position: "Professional Bootlicker",
      start: "July 14, 3022",
      end: "March 25, 4100",
      location: "Boston, MA",
      description:
        "succesfully bootlicked the managers until ego was boosted 300% and 2.5x glazed",
    },
  ]);

  const handleJobSubmit = (newJob: JobFormData) => {
    setJobData([...jobData, newJob]);
  };

  const handleJobDelete = (jobToDelete: JobFormData) => {
    setJobData(jobData.filter((job) => job !== jobToDelete));
  };

  return (
    <>
      <div className="border border-red-500 w-1/3 h-10/12 overflow-y-scroll p-15">
        <DetailsForm onSubmit={handleDetailsSubmit} />
        <EducationForm onSubmit={handleEducationSubmit} />
        <JobForm onSubmit={handleJobSubmit} />
      </div>
      <div className="border border-blue-500 w-2/3 h-10/12">
        <DetailsView formData={detailsData} />
        <EducationView formData={educationData} />
        <JobView formData={jobData} handleJobDelete={handleJobDelete} />
      </div>
    </>
  );
}

export default App;
