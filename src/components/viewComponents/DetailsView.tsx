import { DetailsFormData } from "../types";

interface DetailsViewProps {
  formData?: DetailsFormData;
}

export default function DetailsView({
  formData = {
    name: "John Doe",
    email: "john@gmail.com",
    phone: "999999999",
    address: "5 Sigma Lane, Olympus",
  },
}: DetailsViewProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">Details</div>
      <div>name: {formData.name}</div>
      <div>email: {formData.email}</div>
      <div>phone: {formData.phone}</div>
      <div>address: {formData.address}</div>
    </div>
  );
}
