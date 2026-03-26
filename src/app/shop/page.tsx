"use client";

import { useState, useMemo, useCallback } from "react";
import { MOCK_LAPTOPS, Laptop } from "@/lib/data";
import { SlidersHorizontal, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { GlassOrb } from "@/components/GlassOrb";
import { LaptopDetailsDrawer } from "@/components/LaptopDetailsDrawer";
import { LaptopRow } from "@/components/LaptopRow";

export default function ShopPage() {
  const [selectedLaptop, setSelectedLaptop] = useState<Laptop | null>(null);

  // Filtering & Sorting State
  const [filterBrand, setFilterBrand] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("None");

  const brands = useMemo(() => ["All", ...Array.from(new Set(MOCK_LAPTOPS.map(l => l.brand)))], []);

  // Derived State
  const displayedLaptops = useMemo(() => {
    let result = [...MOCK_LAPTOPS];
    if (filterBrand !== "All") result = result.filter(l => l.brand === filterBrand);
    if (sortBy === "Price: Low to High") result.sort((a, b) => a.price - b.price);
    if (sortBy === "Price: High to Low") result.sort((a, b) => b.price - a.price);
    return result;
  }, [filterBrand, sortBy]);

  // Callbacks to prevent re-renders of memoized components
  const handleLaptopClick = useCallback((laptop: Laptop) => {
    setSelectedLaptop(laptop);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setSelectedLaptop(null);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground-muted pt-12 pb-32 px-6 md:px-12">
      {/* Side Drawer Component (Portal handles fixed positioning) */}
      <LaptopDetailsDrawer 
        laptop={selectedLaptop} 
        onClose={handleCloseDrawer} 
      />

      {/* Back Arrow */}
      <Link href="/" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-surface-border hover:text-accent transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Return to Base
      </Link>

      <header className="mb-16">
        <h1 className="text-[8vw] leading-[0.8] font-heading font-black tracking-tighter text-accent uppercase mb-12 animate-in fade-in slide-in-from-left duration-700">
          Catalog
        </h1>

        {/* Filters & Sorting */}
        <div className="flex flex-col md:flex-row gap-6 border-y border-surface-border/50 py-6">
          <div className="flex items-center gap-4">
            <SlidersHorizontal className="w-5 h-5 text-surface-border" />
            <span className="font-mono text-xs uppercase tracking-widest text-surface-border">Filters:</span>
          </div>

          <select
            value={filterBrand}
            onChange={(e) => setFilterBrand(e.target.value)}
            className="bg-transparent border border-surface-border text-white font-mono text-xs uppercase tracking-widest px-4 py-2 outline-none focus:border-accent cursor-pointer transition-colors"
          >
            {brands.map(b => <option key={b} value={b} className="bg-background">{b}</option>)}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent border border-surface-border text-white font-mono text-xs uppercase tracking-widest px-4 py-2 outline-none focus:border-accent cursor-pointer transition-colors"
          >
            <option value="None" className="bg-background">Sort By: Featured</option>
            <option value="Price: Low to High" className="bg-background">Price: Low to High</option>
            <option value="Price: High to Low" className="bg-background">Price: High to Low</option>
          </select>
        </div>
      </header>

      {/* Editorial List View - Memoized Rows */}
      <div className="relative">
        {displayedLaptops.map((laptop, index) => (
          <LaptopRow 
            key={laptop.id} 
            laptop={laptop} 
            index={index} 
            onClick={handleLaptopClick} 
          />
        ))}
      </div>

      <GlassOrb />
    </main>
  );
}