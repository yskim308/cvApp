import { useState } from "react";
import DetailsForm from "./components/formComponents/DetailsForm";
import EducationForm from "./components/formComponents/EducationForm";
import DetailsView from "./components/viewComponents/DetailsView";
import { DetailsFormData } from "./components/types";

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

  const [];
  return (
    <>
      <div className="border border-red-500 w-1/3">
        <DetailsForm onSubmit={handleDetailsSubmit} />
        <EducationForm />
      </div>
      <div className="border border-blue-500 w-2/3">
        <DetailsView formData={detailsData} />
      </div>
    </>
  );
}

export default App;
