// src/app/xray/[id]/page.tsx
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { format } from 'date-fns';

export const dynamic = 'force-dynamic';

export default async function TraceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data: execution } = await supabase.from('executions').select('*').eq('id', id).single();
  const { data: steps } = await supabase.from('steps').select('*').eq('execution_id', id).order('step_order', { ascending: true });

  if (!execution) return <div className="p-12 font-mono text-red-500 uppercase">ERR: Trace not found.</div>;

  return (
    <div className="min-h-screen bg-background text-foreground-muted font-mono p-6 md:p-12">
      <div className="max-w-5xl mx-auto">

        <Link href="/xray" className="text-xs uppercase tracking-widest hover:text-accent transition-colors mb-12 block border border-surface-border w-fit px-4 py-2">
          &lt; Back to Logs
        </Link>

        <header className="border-2 border-surface-border p-8 mb-12 bg-surface">
          <h1 className="text-2xl md:text-4xl font-black uppercase text-accent mb-4">{execution.name}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs uppercase tracking-widest text-surface-border border-t border-surface-border pt-4">
            <div><span className="block text-foreground mb-1">ID</span>{execution.id.split('-')[0]}</div>
            <div><span className="block text-foreground mb-1">Time</span>{format(new Date(execution.created_at), 'HH:mm:ss')}</div>
            <div><span className="block text-foreground mb-1">Status</span><span className="text-accent">{execution.status}</span></div>
            {/* Fake Barcode for Synthetic aesthetic */}
            <div className="text-right text-xl tracking-tighter opacity-50">||| | || ||| |</div>
          </div>
        </header>

        <div className="space-y-12">
          {steps?.map((step, index) => (
            <div key={step.id} className="border border-surface-border">
              <div className="bg-surface border-b border-surface-border px-6 py-4 flex justify-between items-center uppercase text-xs tracking-widest">
                <span className="text-accent font-bold">STEP_{index + 1}: {step.step_name}</span>
                <span className="text-surface-border">{step.duration_ms}ms</span>
              </div>

              <div className="p-6 space-y-8">
                {step.reasoning && (
                  <div>
                    <div className="text-xs uppercase text-surface-border mb-2">/// AI Reasoning</div>
                    <p className="text-sm leading-relaxed border-l-2 border-accent pl-4">{step.reasoning}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8 border-t border-surface-border border-dashed pt-8">
                  <div>
                    <div className="text-xs uppercase text-surface-border mb-2">/// Input Payload</div>
                    <div className="bg-[#111] border border-surface-border p-4 h-64 overflow-auto">
                      <pre className="text-[10px] text-[#A0D585]">{JSON.stringify(step.input, null, 2)}</pre>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase text-surface-border mb-2">/// Output Payload</div>
                    <div className="bg-[#111] border border-surface-border p-4 h-64 overflow-auto">
                      <pre className="text-[10px] text-[#EEFABD]">{JSON.stringify(step.output, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}