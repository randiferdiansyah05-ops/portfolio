import type { SkillGroup } from "@/lib/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    description: "What I use to build interfaces people actually interact with.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    description: "Currently deepening — building on a Python foundation from coursework and my sensor project.",
    skills: ["Python", "API integration", "Database management (inventory systems)"],
  },
  {
    category: "Tools & Workflow",
    description: "Day-to-day tooling.",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Web3 — Learning Next",
    description: "Not production skills yet — the direction I'm building toward.",
    skills: ["Solidity", "Blockchain fundamentals", "Web3.js / Ethers.js"],
  },
];
