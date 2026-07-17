import type { Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { cx } from "@/lib/utils";

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  "in-progress": "In progress",
  planned: "Planned",
};

const statusTone: Record<Project["status"], "signal" | "amber" | "default"> = {
  live: "signal",
  "in-progress": "amber",
  planned: "amber",
};

export function ProjectStory({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={cx(
        "grid gap-8 border-t border-border py-12 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,220px)_1fr]",
        project.isPlaceholder && "opacity-80"
      )}
    >
      <div>
        <p className="font-mono text-xs text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-2xl font-medium leading-tight text-ink">
          {project.name}
        </h3>
        <p className="mt-2 text-sm text-ink-muted">{project.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge tone={statusTone[project.status]}>{statusLabel[project.status]}</Badge>
          <Badge>{project.context}</Badge>
        </div>
        {project.isPlaceholder && (
          <p className="mt-4 rounded-md border border-dashed border-amber/40 bg-amber-soft/30 px-3 py-2 font-mono text-[11px] leading-relaxed text-amber">
            PLACEHOLDER — replace with real content once this is underway.
          </p>
        )}
      </div>

      <div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Problem</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Approach</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.approach}</p>
          </div>
        </div>

        {project.features.length > 0 && (
          <div className="mt-6">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Features</p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-ink-muted">
                  <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-signal" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-canvas-overlay px-2.5 py-1 font-mono text-[11px] text-ink-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex gap-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-signal underline underline-offset-4 hover:text-signal/80"
                >
                  {link.label} →
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="mt-4 text-xs italic text-ink-faint">{project.role}</p>
      </div>
    </article>
  );
}
