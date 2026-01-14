"use client";

import { useEffect, useState } from "react";
import CandidateForm from "@/components/CandidateForm";
import CandidateList from "@/components/CandidateList";
import { Candidate } from "@/types/candidate";
import { getCandidates, saveCandidates } from "@/utils/storage";

export default function Home() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    setCandidates(getCandidates());
  }, []);

  const addCandidate = (candidate: Candidate) => {
    const updated = [...candidates, candidate];
    setCandidates(updated);
    saveCandidates(updated);
  };

  const deleteCandidate = (index: number) => {
    const updated = candidates.filter((_, i) => i !== index);
    setCandidates(updated);
    saveCandidates(updated);
  };

  return (
    <main className="max-w-3xl mx-auto p-6 bg-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center underline underline-offset-4">
        Candidate Management App
      </h1>

      <CandidateForm onAdd={addCandidate} />
      <CandidateList candidates={candidates} onDelete={deleteCandidate} />
    </main>
  );
}
