import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { site, PLACEHOLDER_GITHUB, PLACEHOLDER_WhatsApp, PLACEHOLDER_WHATSAPP } from "@/data/site";

function ContactLink({
  label,
  value,
  placeholder,
}: {
  label: string;
  value: string;
  placeholder: string;
}) {
  const isPlaceholder = value === placeholder;

  if (isPlaceholder) {
    return (
      <div className="flex items-center justify-between rounded-md border border-dashed border-amber/40 bg-amber-soft/20 px-4 py-3">
        <span className="font-mono text-sm text-amber">{label}</span>
        <span className="font-mono text-xs text-amber">add your link →</span>
      </div>
    );
  }

  return (
    <a
      href={value}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between rounded-md border border-border px-4 py-3 transition-colors hover:border-signal/40"
    >
      <span className="font-mono text-sm text-ink">{label}</span>
      <span className="font-mono text-xs text-ink-muted">{value.replace("https://", "")} →</span>
    </a>
  );
}

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk"
      description="Open to Software Engineer and Full Stack Developer roles. Happy to walk through any project above in more detail."
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <div>
          <div className="flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} variant="primary">
              {site.email}
            </Button>
            <Button href="/resume.pdf" variant="secondary" download>
              Download Resume
            </Button>
          </div>
          <p className="mt-4 text-sm text-ink-muted">
            Based in {site.location}. Replies fastest by email.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ContactLink label="GitHub" value={site.github} placeholder={PLACEHOLDER_GITHUB} />
          <ContactLink label="WhatsApp" value={site.whatsapp} placeholder={PLACEHOLDER_WHATSAPP} />
        </div>
      </div>
    </Section>
  );
}
