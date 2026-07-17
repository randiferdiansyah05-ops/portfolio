import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-canvas/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm text-ink">
          <span className="text-signal">~/</span>
          {site.name.split(" ")[0].toLowerCase()}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-border-strong px-4 py-2 text-sm text-ink transition-colors hover:border-signal/50 hover:text-signal"
        >
          Contact
        </a>
      </Container>
    </header>
  );
}
