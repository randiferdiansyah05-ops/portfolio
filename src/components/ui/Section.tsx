import type { ReactNode } from "react";
import { Container } from "./Container";
import { cx } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cx("scroll-mt-24 py-20 md:py-28", className)}>
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">
            {eyebrow}
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              {description}
            </p>
          )}
        </div>
        {children}
      </Container>
    </section>
  );
}
