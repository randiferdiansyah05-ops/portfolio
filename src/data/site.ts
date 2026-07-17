import type { SiteConfig } from "@/lib/types";

// PLACEHOLDER: github and linkedin were not provided. Replace before publishing.
// The Contact section renders a distinct "add link" state for any value
// that matches these placeholder strings, so a stale link never ships silently.
export const PLACEHOLDER_GITHUB = "https://github.com/your-github";
export const PLACEHOLDER_LINKEDIN = "https://linkedin.com/in/your-profile";

export const site: SiteConfig = {
  name: "Randi Ferdiansyah",
  role: "Software Engineer",
  location: "Cibinong, Kabupaten Bogor, Indonesia",
  email: "randi.ferdiansyah05@gmail.com",
  github: "https://github.com/randiferdiansyah05-ops",
  linkedin: PLACEHOLDER_LINKEDIN,
  statement:
    "I build web applications with clean, scalable architecture — and I'm working toward Web3 development next.",
};
