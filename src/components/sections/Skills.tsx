import { Section } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";
import { cx } from "@/lib/utils";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I work with"
      description="Grouped by how solid each area is today — including the parts I'm actively still building."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className={cx(
              "rounded-lg border p-6",
              group.category.startsWith("Web3")
                ? "border-amber/30 bg-amber-soft/20"
                : "border-border bg-canvas-raised"
            )}
          >
            <h3 className="font-display text-lg font-medium text-ink">{group.category}</h3>
            <p className="mt-1 text-sm text-ink-muted">{group.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border-strong px-3 py-1 font-mono text-xs text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
