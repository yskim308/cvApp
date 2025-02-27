import { DetailsViewProps } from "../types";
import email from "../../assets/email-outline.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/map-marker.svg";

export default function DetailsView({ formData }: DetailsViewProps) {
  return (
    <div className="flex flex-col">
      <div className="text-3xl font-medium flex justify-center mb-2">
        {formData?.name}
      </div>
      <div className="flex justify-center">
        <div className="flex px-3 items-center">
          <img className="w-8 px-1" src={email} />
          <p>{formData?.email}</p>
        </div>
        <div className="flex px-3 items-center">
          <img className="w-8 px-1" src={phone} />
          {formData?.phone}
        </div>
        <div className="flex px-3 items-center">
          <img className="w-8 px-1" src={location} />
          {formData?.address}
        </div>
      </div>
    </div>
  );
}
