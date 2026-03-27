"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Activity } from "lucide-react";
import Link from "next/link";
import { processUserQuery } from "@/lib/ai-actions";
import { BrandLogo } from "./BrandLogo";
import { createPortal } from "react-dom";

export function GlassOrb() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current && !result && !isLoading) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, result, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsLoading(true);
    setResult(null);
    const res = await processUserQuery(query);
    setResult(res.success && res.data ? res.data : { error: "Failed to analyze." });
    setIsLoading(false);
  };

  if (!mounted) return null;

  const orbContent = (
    <>
      {/* Floating AI Orb Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[1000] outline-none group"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
      >
        <div className="w-16 h-16 md:w-20 md:h-20 relative flex items-center justify-center cursor-pointer">
          {/* Pulse Effect */}
          <motion.div 
            className="absolute inset-0 bg-accent/20 rounded-full"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Main Circle */}
          <div className="w-full h-full bg-surface-border/20 backdrop-blur-xl border border-accent/30 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.3)] shadow-xl relative z-10">
            <img src="/logo.svg" alt="AI" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>
      </motion.button>


      {/* Fullscreen Search Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(30px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[99999] bg-[#1F3059]/90 flex flex-col items-center justify-center p-6 md:p-12 overflow-y-auto"
          >
            <button
              onClick={() => { setIsOpen(false); setTimeout(() => { setQuery(""); setResult(null); }, 300); }}
              className="absolute top-8 right-8 text-surface-border hover:text-accent transition-colors bg-background p-4 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>

            <Link href="/xray" onClick={() => setIsOpen(false)} className="absolute top-10 left-10 font-mono text-xs uppercase tracking-widest text-accent hover:text-white flex items-center gap-3 transition-colors border border-accent/30 px-4 py-2 rounded-full">
              <Activity className="w-4 h-4" /> Telemetry
            </Link>

            <div className="w-full max-w-5xl mx-auto mt-20">
              {!result && !isLoading && (
                <motion.div initial={{ y: 20 }} animate={{ y: 0 }}>
                  <h2 className="text-[6vw] md:text-7xl font-heading font-black tracking-tighter uppercase text-white mb-12 leading-[0.9]">
                    What do you <br /><span className="font-accent italic text-accent lowercase">require?</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="relative">
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="e.g. Data science, highly portable, under ₹1,50,000..."
                      className="w-full bg-transparent border-b-2 border-surface-border pb-6 text-2xl md:text-4xl font-body outline-none focus:border-accent text-white transition-colors placeholder:text-surface-border/40"
                    />
                    <button type="submit" disabled={!query.trim()} className="absolute right-0 bottom-6 text-accent hover:text-white disabled:opacity-30 transition-colors">
                      <ArrowRight className="h-10 w-10" />
                    </button>
                  </form>
                </motion.div>
              )}

              {isLoading && (
                <div className="flex flex-col items-center justify-center space-y-12 text-accent py-32">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    {/* Pulsing Loading Rings */}
                    <motion.div 
                      className="absolute inset-0 border-2 border-accent/30 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                      className="absolute inset-2 border-2 border-accent/20 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                    />
                    <div className="w-20 h-20 bg-accent/10 backdrop-blur-md rounded-full flex items-center justify-center border border-accent/30 shadow-[0_0_40px_rgba(var(--accent-rgb),0.2)] overflow-hidden">
                      <img src="/logo.svg" alt="AI Analyzer" className="w-full h-full object-contain animate-pulse" />
                    </div>
                  </div>
                  <p className="font-mono text-sm uppercase tracking-[0.2em] animate-pulse text-white">Synthesizing Logic...</p>
                </div>
              )}

              {result && !result.error && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full pb-20">
                  <div className="font-mono text-xs uppercase tracking-widest text-accent mb-6 border border-accent inline-block px-3 py-1 rounded-full">Top Recommendation</div>

                  <div className="bg-background border border-surface-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-12">
                      <div>
                        <div className="bg-white/90 inline-block p-3 rounded-xl mb-6">
                          <BrandLogo brand={result.winner.brand} className="h-8 w-auto text-[#263B6A]" />
                        </div>
                        <h3 className="text-4xl md:text-6xl font-heading font-black tracking-tighter uppercase text-white leading-none">
                          {result.winner.model}
                        </h3>
                      </div>
                      <div className="font-mono text-3xl md:text-5xl text-accent">₹{result.winner.price.toLocaleString('en-IN')}</div>
                    </div>

                    <div className="bg-surface p-6 md:p-8 rounded-2xl border border-surface-border/50">
                      <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed">
                        {result.winner.justification}
                      </p>
                    </div>
                  </div>

                  {result.alternatives?.length > 0 && (
                    <div className="mt-16">
                      <div className="font-mono text-xs uppercase tracking-widest text-surface-border mb-8 border-b border-surface-border pb-4">Alternatives</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {result.alternatives.map((alt: any, idx: number) => (
                          <div key={idx} className="bg-surface/50 border border-surface-border/50 p-6 rounded-2xl hover:bg-surface transition-colors">
                            <div className="flex justify-between items-start mb-4">
                              <h4 className="font-heading font-bold text-xl uppercase text-white">{alt.brand} {alt.model}</h4>
                              <span className="font-mono text-sm text-accent">₹{alt.price.toLocaleString('en-IN')}</span>
                            </div>
                            <p className="font-body text-sm text-foreground-muted/80 leading-relaxed">{alt.justification}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  return createPortal(orbContent, document.body);
}