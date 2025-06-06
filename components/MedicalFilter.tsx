'use client';

export default function MedicalFilter({
  medicalFilter,
  setMedicalFilter,
  medicalIssues,
}: {
  medicalFilter: string;
  setMedicalFilter: (filter: string) => void;
  medicalIssues: string[];
}) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Filter by Issue:</span>
      <select
        className="px-3 py-1.5 text-sm border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={medicalFilter}
        onChange={(e) => setMedicalFilter(e.target.value)}
      >
        {medicalIssues.map((issue) => (
          <option key={issue} value={issue}>
            {issue}
          </option>
        ))}
      </select>
    </div>
  );
}