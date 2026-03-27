// src/app/xray/page.tsx
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { formatDistanceToNow, subMonths, formatISO } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function XrayDashboard() {
  const oneMonthAgo = formatISO(subMonths(new Date(), 1));
  const { data: executions } = await supabase
    .from('executions')
    .select('id, name, status, created_at')
    .gte('created_at', oneMonthAgo)
    .order('created_at', { ascending: false })
    .limit(50);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 md:p-12 font-mono">
      <header className="border-b-2 border-surface-border pb-8 mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-accent">Telemetry_</h1>
          <p className="text-surface-border text-sm uppercase tracking-widest mt-2">SYS.OBSERVATION.PIPELINE // ACTIVE</p>
        </div>
        <Link href="/" className="text-xs uppercase tracking-widest hover:text-accent transition-colors border border-surface-border px-4 py-2">
          [ EXIT ]
        </Link>
      </header>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-surface-border text-xs uppercase tracking-widest text-surface-border">
              <th className="p-4 font-normal">ID_Hash</th>
              <th className="p-4 font-normal">Query_Target</th>
              <th className="p-4 font-normal">Status</th>
              <th className="p-4 font-normal">Timestamp</th>
              <th className="p-4 font-normal text-right">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {executions?.map((exec) => (
              <tr key={exec.id} className="border-b border-surface-border/30 hover:bg-surface transition-colors group">
                <td className="p-4 text-surface-border text-xs truncate max-w-[150px]">{exec.id}</td>
                <td className="p-4 text-accent">{exec.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 text-xs bg-background border ${exec.status === 'completed' ? 'border-accent text-accent' : 'border-red-500 text-red-500'}`}>
                    {exec.status}
                  </span>
                </td>
                <td className="p-4 text-surface-border">{formatDistanceToNow(new Date(exec.created_at), { addSuffix: true })}</td>
                <td className="p-4 text-right">
                  <Link href={`/xray/${exec.id}`} className="text-accent hover:bg-accent hover:text-background px-4 py-2 border border-accent transition-colors uppercase text-xs">
                    Inspect
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}