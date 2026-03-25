"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plasma } from "@/components/Plasma";

export default function LandingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col justify-between p-6 md:p-12">

      {/* Fullscreen Plasma Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen">
        <Plasma color="#EEFABD" speed={0.8} scale={1.5} opacity={0.8} mouseInteractive={false} />
      </div>

      <header className="flex justify-between items-start z-10 relative">
        <div className="font-heading font-black text-2xl tracking-tighter text-accent">
          GlassBazzar<span className="text-white">.</span>
        </div>
        <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-accent">
          <Link href="/shop" className="hover:text-white transition-colors">Catalog</Link>
          <Link href="/xray" className="hover:text-white transition-colors">Telemetry</Link>
        </div>
      </header>

      <div className="z-10 relative flex flex-col justify-center mt-20 md:mt-0 flex-1 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] leading-[0.85] font-heading font-black tracking-tighter text-accent uppercase mix-blend-plus-lighter"
        >
          Transparent
        </motion.h1>
        <div className="flex items-center gap-6 mix-blend-plus-lighter">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.85] font-accent italic text-white pr-4"
          >
            AI
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] leading-[0.85] font-heading font-black tracking-tighter text-accent uppercase"
          >
            Commerce.
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 max-w-xl font-body text-lg md:text-xl text-foreground-muted/90 leading-relaxed pointer-events-auto"
        >
          An editorial approach to machine-curated hardware. Tell the AI what you need. It searches, filters, and recommends. <br />
          <span className="font-mono text-xs uppercase tracking-widest text-accent mt-6 block border-l-2 border-accent pl-4">No black boxes. Pure telemetry.</span>
        </motion.div>
      </div>

      <footer className="z-10 relative flex justify-between items-end border-t border-surface-border/30 pt-6">
        <div className="font-mono text-[10px] text-surface-border uppercase tracking-widest">
          Powered by GlassBox SDK
        </div>
        <div className="font-mono text-[10px] text-surface-border uppercase tracking-widest">
          Made with Brains
        </div>
      </footer>
    </main>
  );
}