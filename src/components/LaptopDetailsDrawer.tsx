"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Cpu, MemoryStick, HardDrive, Battery, Briefcase } from "lucide-react";
import { Laptop } from "@/lib/data";
import { BrandLogo } from "./BrandLogo";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LaptopDetailsDrawerProps {
  laptop: Laptop | null;
  onClose: () => void;
}

export function LaptopDetailsDrawer({ laptop, onClose }: LaptopDetailsDrawerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (laptop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [laptop]);

  if (!mounted) return null;

  const drawerContent = (
    <AnimatePresence>
      {laptop && (
        <div className="fixed inset-0 z-[10000] flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative h-full w-full md:w-[500px] lg:w-[600px] bg-background border-l border-surface-border shadow-2xl overflow-y-auto z-10 will-change-transform"
          >
            <div className="p-8 md:p-12 min-h-full flex flex-col pt-24 md:pt-12">
              <button
                onClick={onClose}
                className="absolute top-8 right-8 text-surface-border hover:text-accent transition-colors bg-surface p-3 rounded-full z-20"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex-1">
                <div className="bg-white p-4 rounded-2xl mb-8 inline-block shadow-lg">
                  <BrandLogo brand={laptop.brand} className="h-8 w-auto text-[#263B6A]" />
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tighter text-white uppercase leading-none mb-4">
                  {laptop.model}
                </h2>
                <div className="font-mono text-3xl text-accent mb-8">
                  ₹{laptop.price.toLocaleString('en-IN')}
                </div>

                <div className="bg-surface/50 p-6 rounded-2xl border border-surface-border/30 mb-12">
                  <p className="font-body text-lg text-foreground-muted/90 leading-relaxed italic">
                    "{laptop.description}"
                  </p>
                </div>

                <div className="space-y-6 font-mono text-xs uppercase tracking-widest">
                  <h3 className="text-surface-border mb-4 border-b border-surface-border/30 pb-2">Technical Specifications</h3>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Cpu, label: "Processor", value: laptop.cpu },
                      { icon: MemoryStick, label: "Memory", value: laptop.ram },
                      { icon: HardDrive, label: "Storage", value: laptop.storage },
                      { icon: Battery, label: "Battery Life", value: laptop.battery },
                      { icon: Briefcase, label: "Form Factor", value: laptop.weight }
                    ].map((spec, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-surface/30 p-4 rounded-xl border border-surface-border/10">
                        <span className="text-surface-border flex items-center gap-3">
                          <spec.icon className="w-4 h-4 text-accent" /> {spec.label}
                        </span>
                        <span className="text-right text-white font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(drawerContent, document.body);
}
