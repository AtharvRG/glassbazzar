import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Battery, Cpu, HardDrive, MemoryStick, Monitor } from "lucide-react";
import type { ReactNode } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { MOCK_LAPTOPS } from "@/lib/data";

export default async function LaptopDetailPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const laptopId = Number.parseInt(id, 10);
	const laptop = MOCK_LAPTOPS.find((item) => item.id === laptopId);

	if (!laptop) {
		notFound();
	}

	return (
		<main className="min-h-screen bg-background text-foreground-muted p-6 md:p-12">
			<div className="mx-auto max-w-5xl">
				<Link
					href="/shop"
					className="mb-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-surface-border transition-colors hover:text-accent"
				>
					<ArrowLeft className="h-4 w-4" /> Back to Catalog
				</Link>

				<section className="rounded-2xl border border-surface-border/50 bg-surface/40 p-6 md:p-10">
					<div className="mb-8 inline-flex rounded-2xl bg-white/90 p-4">
						<BrandLogo brand={laptop.brand} className="h-8 w-auto text-[#263B6A]" />
					</div>

					<h1 className="text-4xl font-heading font-black uppercase tracking-tight text-white md:text-6xl">
						{laptop.model}
					</h1>

					<p className="mt-3 font-mono text-2xl text-accent">₹{laptop.price.toLocaleString("en-IN")}</p>

					<p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground-muted/90 md:text-lg">
						{laptop.description}
					</p>

					<div className="mt-10 grid gap-4 md:grid-cols-2">
						<SpecRow icon={<Cpu className="h-4 w-4 text-accent" />} label="CPU" value={laptop.cpu} />
						<SpecRow icon={<MemoryStick className="h-4 w-4 text-accent" />} label="RAM" value={laptop.ram} />
						<SpecRow icon={<HardDrive className="h-4 w-4 text-accent" />} label="Storage" value={laptop.storage} />
						<SpecRow icon={<Monitor className="h-4 w-4 text-accent" />} label="Display" value={laptop.display} />
						<SpecRow icon={<Battery className="h-4 w-4 text-accent" />} label="Battery" value={laptop.battery} />
						<SpecRow icon={<Monitor className="h-4 w-4 text-accent" />} label="Weight" value={laptop.weight} />
					</div>
				</section>
			</div>
		</main>
	);
}

function SpecRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
	return (
		<div className="flex items-center justify-between rounded-xl border border-surface-border/30 bg-surface/30 px-4 py-3 font-mono text-xs uppercase tracking-widest">
			<span className="flex items-center gap-2 text-surface-border">
				{icon}
				{label}
			</span>
			<span className="text-right text-white">{value}</span>
		</div>
	);
}
