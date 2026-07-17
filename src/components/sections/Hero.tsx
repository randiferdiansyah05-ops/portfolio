import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section 
    id="top" 
    className="relative flex min-h-[calc(100vh-64px)] items-center overflow-hidden bg-grid-fade">
      <Container>
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

        
      </Container>
    </section>
  );
}
