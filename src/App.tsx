import { useState } from "react";
import DetailsForm from "./components/formComponents/DetailsForm";
import EducationForm from "./components/formComponents/EducationForm";
import DetailsView from "./components/viewComponents/DetailsView";
import { DetailsFormData, EducationFormData } from "./components/types";
import EducationView from "./components/viewComponents/EducationView";

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

  return (
    <>
      <div className="border border-red-500 w-1/3">
        <DetailsForm onSubmit={handleDetailsSubmit} />
        <EducationForm onSubmit={handleEducationSubmit} />
      </div>
      <div className="border border-blue-500 w-2/3">
        <DetailsView formData={detailsData} />
        <EducationView formData={educationData} />
      </div>
    </>
  );
}

export default App;
