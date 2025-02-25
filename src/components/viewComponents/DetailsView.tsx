import { useState, useEffect } from "react";
import { DetailsFormData } from "../formComponents/DetailsForm";

interface DetailsViewProps {
  formData: DetailsFormData;
}

export default function DetailsView({ formData }: DetailsViewProps) {
  const [data, setData] = useState<DetailsFormData>(formData);

  useEffect(() => {
    setData(formData);
  }, [formData]);

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.email}</div>
      <div>{data.phone}</div>
      <div>{data.address}</div>
    </div>
  );
}
