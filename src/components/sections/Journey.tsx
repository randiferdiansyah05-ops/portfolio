import { Section } from "@/components/ui/Section";
import { journey } from "@/data/journey";
import type { JourneyKind } from "@/lib/types";
import { cx } from "@/lib/utils";

const kindColor: Record<JourneyKind, string> = {
  milestone: "bg-ink-muted",
  role: "bg-signal",
  build: "bg-signal",
  learning: "bg-amber",
};

const kindTag: Record<JourneyKind, string> = {
  milestone: "milestone",
  role: "role",
  build: "build",
  learning: "learning",
};

export function Journey() {
  return (
    <Section
      id="journey"
      eyebrow="Developer Journey"
      title="git log --author=randi"
      description="My growth as a developer, read like a commit history — each entry is a real step, in order."
    >
      <div className="relative border-l border-border pl-8">
        {journey.map((entry, i) => (
          <div key={`${entry.date}-${i}`} className="relative pb-10 last:pb-0">
            <span
              className={cx(
                "absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-canvas",
                kindColor[entry.kind]
              )}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-mono text-xs text-ink-faint">{entry.date}</span>
              <span className="font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                [{kindTag[entry.kind]}]
              </span>
            </div>
            <h3 className="mt-1 font-display text-lg font-medium text-ink">{entry.title}</h3>

            {entry.built && (
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{entry.built}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-faint">
              {entry.technology && <span>tech: {entry.technology}</span>}
            </div>

            {(entry.challenge || entry.solution) && (
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {entry.challenge && (
                  <p className="rounded-md bg-canvas-raised p-3 text-xs leading-relaxed text-ink-muted">
                    <span className="text-ink-faint">challenge — </span>
                    {entry.challenge}
                  </p>
                )}
                {entry.solution && (
                  <p className="rounded-md bg-canvas-raised p-3 text-xs leading-relaxed text-ink-muted">
                    <span className="text-ink-faint">solution — </span>
                    {entry.solution}
                  </p>
                )}
              </div>
            )}

            {entry.isPlaceholder && (
              <p className="mt-3 inline-block rounded-md border border-dashed border-amber/40 bg-amber-soft/30 px-3 py-1.5 font-mono text-[11px] text-amber">
                PLACEHOLDER — not started yet
              </p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
