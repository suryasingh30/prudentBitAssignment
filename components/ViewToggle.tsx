'use client';

export default function ViewToggle({
  view,
  setView,
}: {
  view: 'card' | 'table';
  setView: (view: 'card' | 'table') => void;
}) {
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-3 py-1.5 text-sm rounded-md ${view === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
        onClick={() => setView('table')}
      >
        Table View
      </button>
      <button
        className={`px-3 py-1.5 text-sm rounded-md ${view === 'card' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
        onClick={() => setView('card')}
      >
        Card View
      </button>
    </div>
  );
}