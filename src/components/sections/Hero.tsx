import Image from "next/image";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid-fade pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
              open to Software Engineer / Full Stack roles
            </div>

            <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl">
              {site.name}
              <span className="mt-2 block text-2xl font-normal text-ink-muted md:text-3xl">
                {site.role}, building toward Web3
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              {site.statement} My background is in operations and digital
              marketing — I bring that same problem-first instinct to writing
              software.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="#projects" variant="primary">
                View Projects
              </Button>
              <Button href="#contact" variant="secondary">
                Contact Me
              </Button>
              <Button href="/resume.pdf" variant="ghost" download>
                Download Resume ↓
              </Button>
            </div>

            <div className="mt-16 max-w-md rounded-lg border border-border bg-canvas-raised px-5 py-4 font-mono text-sm text-ink-muted">
              <p>
                <span className="text-signal">$</span> whoami
              </p>
              <p className="mt-1 text-ink">
                curious developer — learns by shipping real projects
                <span className="ml-1 inline-block h-4 w-[2px] translate-y-[3px] animate-blink bg-signal" />
              </p>
            </div>
          </div>

          <div className="flex justify-start md:justify-end">
            <div className="relative h-40 w-32 overflow-hidden rounded-lg border border-border-strong bg-canvas-raised shadow-[0_0_0_1px_rgba(79,209,197,0.08)] md:h-48 md:w-40">
              <Image
                src="/avatar.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(min-width: 768px) 160px, 128px"
                className="object-cover grayscale-[15%]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
