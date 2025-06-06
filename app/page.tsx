'use client';
import { useEffect, useState } from 'react';
import PatientCard from '@/components/PatientCard';
import PatientTable from '@/components/PatientTable';
import { Patient } from '@/lib/types';
import SearchBar from '@/components/SearchBar';
import ViewToggle from '@/components/ViewToggle';
import MedicalFilter from '@/components/MedicalFilter';
import SortControls from '@/components/SortControls';

export default function HomePage() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [view, setView] = useState<'card' | 'table'>('card');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [medicalFilter, setMedicalFilter] = useState<string>('all');
  const [sortField, setSortField] = useState<'name' | 'age' | 'medical_issue'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    const fetchPatients = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const res = await fetch(
          `/api/patients?q=${encodeURIComponent(query)}&page=${page}&limit=10`
        );
        
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        
        const data = await res.json();
        setPatients(data.patients || []);
        setFilteredPatients(data.patients || []);
        setTotal(data.total || 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch patients');
        console.error('Fetch error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPatients();
  }, [query, page]);

  useEffect(() => {
    let result = [...patients];
    
    if (medicalFilter !== 'all') {
      result = result.filter(patient => 
        patient.medical_issue.toLowerCase() === medicalFilter.toLowerCase()
      );
    }
    
    result.sort((a, b) => {
      if (sortField === 'name') {
        const nameA = a.patient_name.toLowerCase();
        const nameB = b.patient_name.toLowerCase();
        return sortDirection === 'asc' 
          ? nameA.localeCompare(nameB) 
          : nameB.localeCompare(nameA);
      } else if (sortField === 'age') {
        return sortDirection === 'asc' 
          ? (a.age || 0) - (b.age || 0) 
          : (b.age || 0) - (a.age || 0);
      } else {
        const issueA = a.medical_issue.toLowerCase();
        const issueB = b.medical_issue.toLowerCase();
        return sortDirection === 'asc' 
          ? issueA.localeCompare(issueB)
          : issueB.localeCompare(issueA);
      }
    });
    
    setFilteredPatients(result);
  }, [patients, medicalFilter, sortField, sortDirection]);

  const medicalIssues = ['all', ...new Set(patients.map(p => p.medical_issue))];
  const handlePrevious = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => (p * 10 < total ? p + 1 : p));
  const toggleSortDirection = () => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');

  return (
    <div className="p-4 space-y-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Patient Directory</h1>
          <span className="text-gray-600">{total} Patients Found</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <SearchBar query={query} setQuery={setQuery} />
            <ViewToggle view={view} setView={setView} />
          </div>

          <div className="flex items-center justify-between gap-4">
            <MedicalFilter 
              medicalFilter={medicalFilter} 
              setMedicalFilter={setMedicalFilter} 
              medicalIssues={medicalIssues} 
            />
            <SortControls
              sortField={sortField}
              setSortField={setSortField}
              sortDirection={sortDirection}
              toggleSortDirection={toggleSortDirection}
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-50 border border-red-200 rounded text-red-600">
          Error: {error}
        </div>
      ) : filteredPatients.length === 0 ? (
        <div className="p-4 text-center text-gray-500">
          No patients found {query ? `for "${query}"` : ''}
          {medicalFilter !== 'all' && ` with issue "${medicalFilter}"`}
        </div>
      ) : view === 'card' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredPatients.map((patient) => (
            <PatientCard key={patient.patient_id} patient={patient} />
          ))}
        </div>
      ) : (
        <PatientTable patients={filteredPatients} />
      )}

      <div className="flex items-center justify-between mt-6">
        <button
          className={`px-4 py-2 rounded-md border ${page === 1 || isLoading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
          onClick={handlePrevious}
          disabled={page === 1 || isLoading}
        >
          Previous
        </button>
        
        <div className="text-sm text-gray-600">
          Page {page} of {Math.ceil(total / 10)} • {filteredPatients.length} shown of {total} total
        </div>
        
        <button
          className={`px-4 py-2 rounded-md border ${page * 10 >= total || isLoading ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white hover:bg-gray-50'}`}
          onClick={handleNext}
          disabled={page * 10 >= total || isLoading}
        >
          Next
        </button>
      </div>
    </div>
  );
}