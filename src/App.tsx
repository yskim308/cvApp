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
    <div className="h-screen flex flex-col">
      <div className="font-bold text-4xl text-slate-700 flex justify-center m-5">
        CV Builder
      </div>
      <div className="flex flex-grow overflow-hidden">
        <div className="w-1/3 overflow-y-auto mx-5 p-15 rounded-4xl">
          <DetailsForm onSubmit={handleDetailsSubmit} />
          <EducationForm onSubmit={handleEducationSubmit} />
          <JobForm onSubmit={handleJobSubmit} />
        </div>
        <div className="border border-blue-500 overflow-y-auto mx-5 w-4xl bg-slate-50 px-14 py-10">
          <DetailsView formData={detailsData} />
          <EducationView formData={educationData} />
          <JobView formData={jobData} handleJobDelete={handleJobDelete} />
        </div>
      </div>
      <div className="text-lg flex justify-center">
        <p>footer...</p>
      </div>
    </div>
  );
}

export default App;
