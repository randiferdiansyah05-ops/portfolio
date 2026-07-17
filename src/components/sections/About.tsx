import { Section } from "@/components/ui/Section";

const principles = [
  {
    title: "Start from the real problem",
    body: "Every project I've shipped — from an irrigation controller to a dealership site — started with a specific, unglamorous problem someone actually had. I design and build backward from that, not from the tech I want to use.",
  },
  {
    title: "Learn by building, not by watching",
    body: "I picked up Next.js by shipping jaecooplu.co.id solo, end to end — routing, layout, and integration decisions included. I'd rather ship something small and real than finish another tutorial.",
  },
  {
    title: "Operations experience shapes how I code",
    body: "Managing a live inventory database and marketing funnels taught me to think about edge cases, data integrity, and what happens when real users hit a system — habits I now bring into how I structure frontend and backend code.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="From operations into engineering"
      description="A computer systems graduate who spent two years in marketing and IT operations before committing to software engineering full-time — and who's now building toward Web3."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {principles.map((p) => (
          <div
            key={p.title}
            className="rounded-lg border border-border bg-canvas-raised p-6 transition-colors hover:border-signal/30"
          >
            <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
