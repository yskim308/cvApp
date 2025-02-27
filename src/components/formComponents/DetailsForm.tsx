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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border border-slate-300 px-5 pt-5 rounded-4xl text-slate-900"
    >
      <div className="text-xl font-extrabold">Details</div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="off"
        className="border h-7 py-2 px-1 rounded-lg"
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="off"
        className="border h-7 py-2 px-1 rounded-lg"
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
        className="border h-7 py-2 px-1 rounded-lg"
        required
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className="border h-7 py-2 px-1 rounded-lg"
        autoComplete="off"
      />
      <div className="flex justify-center p-1">
        <button
          type="submit"
          className="border border-slate-400 p-1 rounded-xl text-slate-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
