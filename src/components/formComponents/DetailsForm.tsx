import { ChangeEvent, FormEvent, useState } from "react";
import { DetailsFormData, DetailsFormProps } from "../types";

export default function DetailsForm({ onSubmit }: DetailsFormProps) {
  const [formData, setFormData] = useState<DetailsFormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="text-3xl font-extrabold">Details</div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        autoComplete="off"
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        autoComplete="off"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
