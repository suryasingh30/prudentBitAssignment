import { Patient } from '@/lib/types';

export default function PatientTable({ patients }: { patients: Patient[] }) {
  return (
    <div className="overflow-x-auto border rounded-xl shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">ID</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Age</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Medical Issue</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Address</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patients.map((patient) => {
            const contact = patient.contact?.[0];
            return (
              <tr key={patient.patient_id}>
                <td className="px-4 py-2 text-sm">{patient.patient_id}</td>
                <td className="px-4 py-2 text-sm">{patient.patient_name}</td>
                <td className="px-4 py-2 text-sm">{patient.age}</td>
                <td className="px-4 py-2 text-sm">{patient.medical_issue}</td>
                <td className="px-4 py-2 text-sm">{contact?.address || '-'}</td>
                <td className="px-4 py-2 text-sm">{contact?.number || '-'}</td>
                <td className="px-4 py-2 text-sm">{contact?.email || '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
