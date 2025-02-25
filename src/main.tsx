import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DetailsForm from "./components/Details";
//import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="border border-red-500 w-1/3">
      <DetailsForm />
    </div>
    <div className="border border-blue-500 w-2/3"></div>
  </StrictMode>,
);
