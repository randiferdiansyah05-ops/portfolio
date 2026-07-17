import { cx } from "@/lib/utils";

export function Badge({
  children,
  tone = "default",
}: {
  children: string;
  tone?: "default" | "signal" | "amber";
}) {
  const toneClasses = {
    default: "border-border text-ink-muted",
    signal: "border-signal/40 text-signal bg-signal/10",
    amber: "border-amber/40 text-amber bg-amber/10",
  }[tone];

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide",
        toneClasses
      )}
    >
      {children}
    </span>
  );
}
