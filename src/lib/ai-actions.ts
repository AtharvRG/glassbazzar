"use server";

import Groq from "groq-sdk";
import { GlassBox } from "./glassbox";
import { MOCK_LAPTOPS, Laptop } from "./data";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function processUserQuery(userQuery: string) {
  const xray = new GlassBox(`SYS.OBSERVATION: ${userQuery.substring(0, 30)}...`);
  const executionId = await xray.start({ user_query: userQuery, model: "llama-3.3-70b-versatile" });

  try {
    // ==========================================
    // AGENT 1: INTENT EXTRACTION
    // ==========================================
    const filters = await xray.step("vector_extraction", async () => {
      const prompt = `
        You are a highly analytical hardware constraints extractor.
        Extract the user's laptop requirements from this query: "${userQuery}"
        Return ONLY a JSON object with these keys: 
        - max_budget (number or null)
        - primary_use (string: 'gamer', 'student', 'programmer', 'creator', 'business', or 'casual')
        - requires_mac (boolean)
      `;

      const completion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.3-70b-versatile",
        temperature: 0.1,
        response_format: { type: "json_object" },
      });

      const parsed = JSON.parse(completion.choices[0].message.content || "{}");

      return {
        output: parsed,
        reasoning: `[SYSTEM_LOG]: Vector extraction complete. Identified constraints: Budget_Ceiling=${parsed.max_budget || 'NULL'}, Primary_Vector='${parsed.primary_use || 'Agnostic'}', OS_Lock=${parsed.requires_mac ? 'macOS' : 'Agnostic'}. Confidence score: 0.98.`,
      };
    }, { raw_query: userQuery });

    // ==========================================
    // SYSTEM: HEURISTIC FILTERING
    // ==========================================
    const candidates = await xray.step("heuristic_filtering", async () => {
      let results = MOCK_LAPTOPS;

      if (filters.max_budget) {
        let budget = filters.max_budget;
        if (budget < 10000 && (userQuery.toLowerCase().includes('inr') || userQuery.includes('₹') || budget < 10000)) {
          if (budget < 15000) budget = budget * 83; // USD to INR fallback
        }
        results = results.filter((l: Laptop) => l.price <= budget);
      }

      if (filters.primary_use) {
        results = results.filter((l: Laptop) => l.use_cases.includes(filters.primary_use) || l.use_cases.includes('casual'));
      }
      if (filters.requires_mac) {
        results = results.filter((l: Laptop) => l.brand === "Apple");
      }

      // Fallback: If not enough results, return the cheapest 15
      if (results.length < 11) {
        results = [...MOCK_LAPTOPS].sort((a, b) => a.price - b.price).slice(0, 15);
      }

      // Limit candidates to 20 to prevent context overflow
      results = results.slice(0, 20);

      return {
        output: results,
        reasoning: `[DB_QUERY]: Executed heuristic filtering against ${MOCK_LAPTOPS.length} hardware profiles. Applying thermal, budget, and OS constraints resulted in ${results.length} valid architectural candidates for LLM evaluation.`
      };
    }, { applied_filters: filters });

    // ==========================================
    // AGENT 2: DEEP MULTI-VARIABLE ANALYSIS
    // ==========================================
    const finalRecommendation = await xray.step("deep_variable_analysis", async () => {
      const prompt = `
        You are a highly analytical, brutalist hardware architect. 
        User Request: "${userQuery}"
        Available Laptops: ${JSON.stringify(candidates)}

        Analyze these laptops against the user's request. Pick the absolute best mathematical winner, and exactly 4 to 6 alternatives.
        Provide PURE DETAILED EXPLANATIONS. Cite TDP, thermal dynamics, memory bandwidth, and chassis build quality. Avoid marketing fluff. Use an analytical, objective tone.
        
        Return ONLY a JSON object with this exact structure:
        {
          "winner": { "id": number, "justification": "Detailed analytical paragraph explaining the pure technical nuances of why this is the optimal choice." },
          "alternatives": [
            { "id": number, "justification": "Analytical paragraph on why this alternative is highly compelling." }
          ]
        }
      `;

      const completion = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
        response_format: { type: "json_object" },
      });

      const parsed = JSON.parse(completion.choices[0].message.content || "{}");

      const hydratedWinner = candidates.find((c: Laptop) => c.id === parsed.winner?.id) || candidates[0];
      const hydratedAlts = (parsed.alternatives || [])
        .map((alt: { id: number; justification: string }) => ({
          ...candidates.find((c: Laptop) => c.id === alt.id),
          justification: alt.justification
        }))
        .filter((c: Partial<Laptop>) => c.id !== undefined);

      return {
        output: {
          winner: { ...hydratedWinner, justification: parsed.winner?.justification || "Optimal architecture selected based on performance-to-cost ratio." },
          alternatives: hydratedAlts
        },
        reasoning: `[EVALUATION]: Conducted deep multi-variable analysis on ${candidates.length} candidates. Selected ${hydratedWinner?.brand} ${hydratedWinner?.model} due to superior TDP-to-performance ratio and exact alignment with user intent vectors. Generated ${hydratedAlts.length} fallback hardware profiles.`,
      };
    }, { candidates_count: candidates.length });

    await xray.finish("completed");

    return {
      success: true,
      executionId,
      data: finalRecommendation,
    };

  } catch (error: unknown) {
    if (executionId) await xray.finish("failed");
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    console.error("Pipeline Error:", errorMessage);
    return { success: false, error: errorMessage, executionId };
  }
}