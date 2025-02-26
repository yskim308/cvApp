import { DetailsViewProps } from "../types";

export default function DetailsView({ formData }: DetailsViewProps) {
  return (
    <div className="flex flex-col">
      <div className="text-2xl font-semibold">Details</div>
      <div>name: {formData?.name}</div>
      <div>email: {formData?.email}</div>
      <div>phone: {formData?.phone}</div>
      <div>address: {formData?.address}</div>
    </div>
  );
}
