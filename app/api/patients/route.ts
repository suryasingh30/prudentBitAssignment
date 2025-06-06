import { NextRequest, NextResponse } from 'next/server';
import { getPatients } from '@/lib/data';

export function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q')?.toLowerCase() || '';
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const offset = (page - 1) * limit;

  const allPatients = getPatients();
  const filtered = allPatients.filter((p) =>
    p.patient_name.toLowerCase().includes(q)
  );

  const paginated = filtered.slice(offset, offset + limit);

  return NextResponse.json({
    total: filtered.length,
    patients: paginated,
  });
}
