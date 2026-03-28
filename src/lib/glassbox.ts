import { supabase } from './supabase';

export type StepResult<T> = {
  output: T;
  reasoning?: string;
};

export class GlassBox {
  private executionId: string | null = null;
  private stepCount = 0;

  constructor(private name: string, existingExecutionId?: string) {
    if (existingExecutionId) {
      this.executionId = existingExecutionId;
    }
  }

async start(metadata: Record<string, unknown> = {}) {    try {
      const { data, error } = await supabase
        .from('executions')
        .insert({ name: this.name, metadata, status: 'running' })
        .select()
        .single();

      if (error) throw error;
      this.executionId = data.id;
      return this.executionId;
    } catch (err) {
      console.error('GlassBox: Failed to start', err);
      return null;
    }
  }

  async step<T>(
    stepName: string,
    logicFn: () => Promise<StepResult<T>>,
    // Fix 2: use unknown
    inputData: unknown = {},
    durationOverrideMs?: number
  ): Promise<T> {
    if (!this.executionId) {
      const res = await logicFn();
      return res.output;
    }

    this.stepCount++;
    const currentStepOrder = this.stepCount;
    const startTime = Date.now();
    
    let status = 'success';
    // Fix 3: use unknown
    let outputData: unknown = null;
    let reasoning = '';

    try {
      const result = await logicFn();
      outputData = result.output;
      reasoning = result.reasoning || '';
      return result.output;
    // Fix 4: catch as unknown and extract error message safely
    } catch (err: unknown) {
      status = 'failed';
      outputData = { error: err instanceof Error ? err.message : String(err) };
      reasoning = 'Step exception';
      throw err;
    } finally {
      const duration = durationOverrideMs ?? (Date.now() - startTime);
      supabase.from('steps').insert({
        execution_id: this.executionId,
        step_name: stepName,
        step_order: currentStepOrder,
        input: inputData,
        output: outputData,
        reasoning,
        status,
        duration_ms: duration,
      }).then(({ error }) => {
        if (error) console.error('GlassBox Log Error', error);
      });
    }
  }

  async finish(status: 'completed' | 'failed' = 'completed') {
    if (!this.executionId) return;
    await supabase.from('executions').update({ status }).eq('id', this.executionId);
  }
}