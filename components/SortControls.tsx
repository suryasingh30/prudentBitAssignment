'use client';

export default function SortControls({
  sortField,
  setSortField,
  sortDirection,
  toggleSortDirection,
}: {
  sortField: 'name' | 'age' | 'medical_issue';
  setSortField: (field: 'name' | 'age' | 'medical_issue') => void;
  sortDirection: 'asc' | 'desc';
  toggleSortDirection: () => void;
}) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Sort by:</span>
      <select
        className="px-3 py-1.5 text-sm border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={sortField}
        onChange={(e) => setSortField(e.target.value as 'name' | 'age' | 'medical_issue')}
      >
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="medical_issue">Medical Issue</option>
      </select>
      <button
        className="px-3 py-1.5 text-sm border rounded-md bg-white hover:bg-gray-50 flex items-center"
        onClick={toggleSortDirection}
      >
        {sortDirection === 'asc' ? (
          <span className="flex items-center">
            <span>A-Z</span>
            <span className="ml-1">↑</span>
          </span>
        ) : (
          <span className="flex items-center">
            <span>Z-A</span>
            <span className="ml-1">↓</span>
          </span>
        )}
      </button>
    </div>
  );
}