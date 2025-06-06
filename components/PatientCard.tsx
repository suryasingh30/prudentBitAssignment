import { Patient } from '@/lib/types';

export default function PatientCard({ patient }: { patient: Patient }) {
  const contact = patient.contact[0];
  
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg mb-1">{patient.patient_name}</h3>
      <p className="text-sm text-gray-600 mb-2">Age: {patient.age}</p>
      <p className="text-sm font-medium text-blue-600 mb-3">{patient.medical_issue}</p>
      <div className="space-y-1 text-sm">
        {contact.address && (
          <p className="text-gray-700 flex items-start">
            <span className="inline-block min-w-[20px]">📍</span>
            <span>{contact.address}</span>
          </p>
        )}
        
        {contact.number && (
          <p className="text-gray-700 flex items-start">
            <span className="inline-block min-w-[20px]">📞</span>
            <span>{contact.number}</span>
          </p>
        )}
        
        {contact.email && contact.email !== "N/A" && (
          <p className="text-gray-700 flex items-start">
            <span className="inline-block min-w-[20px]">✉️</span>
            <span className="truncate">{contact.email}</span>
          </p>
        )}
      </div>
    </div>
  );
}