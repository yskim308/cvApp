import { useState } from "react";
import DetailsForm from "./components/formComponents/DetailsForm";
import EducationForm from "./components/formComponents/EducationForm";
import DetailsView from "./components/viewComponents/DetailsView";

function App() {
  const [detailsData, setDetailsData] = useState();
  const [educationData, setEducationData] = useState();
  return (
    <>
      <div className="border border-red-500 w-1/3">
        <DetailsForm />
        <EducationForm />
      </div>
      <div className="border border-blue-500 w-2/3">
        <DetailsView />
      </div>
    </>
  );
}

export default App;
