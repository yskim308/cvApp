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

function dateToString(date: string) {
  const months: { [key: string]: string } = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December",
  };
  const [month, , year] = date.split("/");
  const formattedString: string = `${months[month]} ${year}`;
  console.log(formattedString);
  return formattedString;
}

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

  const [educationData, setEducationData] = useState<EducationFormData[]>([
    {
      school: "Oxford University",
      degree: "Brainrot Sciences, PHD",
      date: "February 2025",
      location: "Oxford, England",
    },
    {
      school: "MIT",
      degree: "Instagram Reelogy, MS",
      date: "July 2021",
      location: "Boston, MA",
    },
    {
      school: "Hardverd",
      degree: "Rizzology, BS",
      date: "January 2018",
      location: "Boston, MA",
    },
  ]);

  const handleEducationSubmit = (data: EducationFormData) => {
    setEducationData([
      ...educationData,
      {
        ...data,
        date: dateToString(data.date),
      },
    ]);
  };

  const handleEducationDelete = (schoolToDelete: EducationFormData) => {
    setEducationData(
      educationData.filter((school) => schoolToDelete !== school),
    );
  };

  const [jobData, setJobData] = useState<JobFormData[]>([
    {
      company: "Google",
      position: "Janitor",
      start: "January 1876",
      end: "March 2099",
      location: "Mongolia",
      description:
        "Performed extreme cleaning operations and what not and things and such. lorem ipsum and yeah haha",
    },
    {
      company: "SigmaboySigmaboy",
      position: "Professional Bootlicker",
      start: "July 3022",
      end: "March 4100",
      location: "Boston, MA",
      description:
        "succesfully bootlicked the managers until ego was boosted 300% and 2.5x glazed",
    },
  ]);

  const handleJobSubmit = (newJob: JobFormData) => {
    const jobToAdd: JobFormData = {
      ...newJob,
      start: dateToString(newJob.start),
      end: dateToString(newJob.end),
    };
    setJobData([...jobData, jobToAdd]);
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
          <EducationView
            formData={educationData}
            handleEducationDelete={handleEducationDelete}
          />
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
