// Central content types.
// Data currently lives in /src/data as typed constants. Because every
// section reads through these types, swapping the data layer for a CMS
// or database later only means changing how these types are populated —
// not the components that render them.

export type ProjectStatus = "live" | "in-progress" | "planned";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  /** Short badge shown on the card, e.g. "Solo project", "Academic project" */
  context: string;
  problem: string;
  approach: string;
  features: string[];
  stack: string[];
  role: string;
  links: ProjectLink[];
  /** Set true when the entry is a placeholder that must be replaced before publishing */
  isPlaceholder?: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export type JourneyKind = "milestone" | "build" | "learning" | "role";

export interface JourneyEntry {
  date: string;
  kind: JourneyKind;
  title: string;
  built?: string;
  technology?: string;
  challenge?: string;
  solution?: string;
  isPlaceholder?: boolean;
}

export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  whatsapp: string;
  statement: string;
}
