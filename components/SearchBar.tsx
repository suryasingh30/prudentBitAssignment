'use client';

export default function SearchBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (query: string) => void;
}) {
  return (
    <div className="flex-1 max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            onClick={() => setQuery('')}
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}