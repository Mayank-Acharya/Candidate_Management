import { Candidate } from "@/types/candidate";

interface Props {
  candidates: Candidate[];
  onDelete: (index: number) => void;
}

export default function CandidateList({ candidates, onDelete }: Props) {
  if (candidates.length === 0) {
    return <p className="text-gray-500">No candidates added yet.</p>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 underline underline-offset-2">Candidate List</h2>

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((c, index) => (
            <tr key={index}>
              <td className="border p-2">{c.name}</td>
              <td className="border p-2">{c.email}</td>
              <td className="border p-2">{c.role}</td>
              <td className="border p-2 text-center">
                <button
                  onClick={() => onDelete(index)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
