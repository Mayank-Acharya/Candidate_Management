import { Candidate } from "@/types/candidate";

export const getCandidates = (): Candidate[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem("candidates");
  return data ? JSON.parse(data) : [];
};

export const saveCandidates = (candidates: Candidate[]) => {
  localStorage.setItem("candidates", JSON.stringify(candidates));
};
