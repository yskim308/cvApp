import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DetailsForm from "./components/DetailsForm";
import EducationForm from "./components/EducationForm";
//import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="border border-red-500 w-1/3">
      <DetailsForm />
      <EducationForm />
    </div>
    <div className="border border-blue-500 w-2/3"></div>
  </StrictMode>,
);
