"use client";

import { memo } from "react";
import { Laptop } from "@/lib/data";
import { BrandLogo } from "./BrandLogo";

interface LaptopRowProps {
  laptop: Laptop;
  index: number;
  onClick: (laptop: Laptop) => void;
}

export const LaptopRow = memo(function LaptopRow({ laptop, index, onClick }: LaptopRowProps) {
  return (
    <div
      onClick={() => onClick(laptop)}
      className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-12 border-b border-surface-border/50 hover:bg-surface transition-all duration-300 cursor-pointer px-4 -mx-4 rounded-xl will-change-colors"
    >
      <div className="flex items-center gap-6 md:gap-12 w-full md:w-2/3">
        <span className="font-accent italic text-3xl md:text-5xl text-surface-border/50 group-hover:text-accent transition-colors w-12 shrink-0">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-sm shrink-0">
          <BrandLogo brand={laptop.brand} className="h-6 w-auto text-[#263B6A]" />
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl font-heading font-black tracking-tighter text-white uppercase transition-colors">
            {laptop.model}
          </h2>
          <div className="font-mono text-xs uppercase tracking-widest text-surface-border mt-2 flex gap-4">
            <span>{laptop.cpu}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{laptop.ram}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-0 text-left md:text-right">
        <div className="font-mono text-xl md:text-2xl text-accent">
          ₹{laptop.price.toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  );
});
