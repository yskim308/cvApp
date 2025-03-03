import { useState } from "react";
import DetailsForm from "./components/formComponents/DetailsForm";
import EducationForm from "./components/formComponents/EducationForm";
import DetailsView from "./components/viewComponents/DetailsView";
import {
  DetailsFormData,
  EducationFormData,
  JobFormData,
  SkillsFormData,
} from "./components/types";
import EducationView from "./components/viewComponents/EducationView";
import JobForm from "./components/formComponents/JobForm";
import JobView from "./components/viewComponents/JobView";
import SkillsForm from "./components/formComponents/SkillsForm";
import SkillsView from "./components/viewComponents/SKillsView";

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

  const [skillsData, setSKillsData] = useState<SkillsFormData[]>([
    {
      skill: "skill",
      description: "tools or description of the skill",
    },
    {
      skill: "Brainrotting",
      description:
        "advanced brainrot certifications in instagram reels, tik tok, and youtube shorts",
    },
    {
      skill: "Operating Systems",
      description: "C++ and ARM architecture OS",
    },
    {
      skill: "English Language",
      description: "TOEFL 120/120 and proven rage-baiting skills on reddit",
    },
  ]);

  const appendSkill = (skill: SkillsFormData) => {
    setSKillsData([...skillsData, skill]);
  };

  const handleSkillDelete = (skillToDelete: SkillsFormData) => {
    setSKillsData(skillsData.filter((skill) => skill !== skillToDelete));
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
      company: "Job Title",
      position: "Company",
      start: "January 1876",
      end: "March 2099",
      location: "City, Country",
      description: `- Start each bullet with a strong, past-tense action verb
      - Each bullet should be 1-2 lines long and max 1 sentence long
      - Don't let bullets spill onto the next line`,
    },
    {
      company: "Google",
      position: "Bootlicker",
      start: "July 3022",
      end: "March 4100",
      location: "San Francisco, CA",
      description: `- Glazed upper management until ego was boosted 300%
      - Licked up to 300 boots per day to improve management narcissism
      - Increased the rate of kissing ass by 200% in 6 months`,
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
          <SkillsForm appendSkill={appendSkill} />
          <JobForm onSubmit={handleJobSubmit} />
          <EducationForm onSubmit={handleEducationSubmit} />
        </div>
        <div className="border border-blue-500 overflow-y-auto mx-5 w-4xl bg-slate-50 px-14 py-10">
          <DetailsView formData={detailsData} />
          <SkillsView data={skillsData} handleDelete={handleSkillDelete} />
          <JobView formData={jobData} handleJobDelete={handleJobDelete} />
          <EducationView
            formData={educationData}
            handleEducationDelete={handleEducationDelete}
          />
        </div>
      </div>
      <div className="text-lg flex justify-center">
        <p>footer...</p>
      </div>
    </div>
  );
}

export default App;
