"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Candidate } from "@/types/candidate";

interface Props {
  onAdd: (candidate: Candidate)=>void;
}

export default function CandidateForm({ onAdd }: Props) {
  const [form, setForm]=useState<Candidate>({
    name: "",
    email: "",
    role: "",
  });

  const handleChange =(e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form,[e.target.name]: e.target.value });
  };

  const handleSubmit =(e: FormEvent) => {
    e.preventDefault();

    if (!form.name||!form.email ||!form.role) {
      alert("All fields are required");
      return;
    }

    onAdd(form);
    setForm({ name: "",email:"",role:"" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow mb-6 "
    >
      <h2 className="text-xl font-semibold mb-4 underline underline-offset-2">Add Candidate</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded  hover:bg-blue-50"
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded  hover:bg-blue-50"
      />

      <input
        name="role"
        placeholder="Role"
        value={form.role}
        onChange={handleChange}
        className="border p-2 w-full mb-3 rounded  hover:bg-blue-50"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 flex items-center justify-center align-middle">
        Add
      </button>
    </form>
  );
}
