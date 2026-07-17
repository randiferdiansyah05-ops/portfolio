import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-ink-faint md:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
