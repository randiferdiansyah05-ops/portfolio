import type { JourneyEntry } from "@/lib/types";

// Ordered oldest -> newest. Rendered as a commit-log-style timeline.
export const journey: JourneyEntry[] = [
  {
    date: "2019",
    kind: "milestone",
    title: "Started S1 Sistem Komputer at Universitas Gunadarma",
    technology: "Foundations: programming, computer systems, networking",
  },
  {
    date: "2023",
    kind: "build",
    title: "Shipped my final academic project: automated plant irrigation",
    built: "A controller-based system using a YL-69 soil moisture sensor to trigger watering automatically, with a Telegram bot as the control interface.",
    technology: "Python, microcontroller programming, Telegram Bot API",
    challenge: "Turning noisy raw sensor readings into a reliable, temperature-aware trigger for automatic watering.",
    solution: "Wrote controller logic that combines moisture and temperature thresholds before triggering the pump, and exposed monitoring/control through a Telegram bot instead of a physical interface.",
  },
  {
    date: "Jan – Jul 2024",
    kind: "role",
    title: "Digital Marketing Intern at PCS Indonesia",
    built: "Ran paid campaigns (Facebook Ads and others), managed company social media, and produced regular internal performance reports.",
    technology: "Meta Ads, campaign planning, analytics reporting",
  },
  {
    date: "Aug 2024",
    kind: "learning",
    title: "Completed Fundamental Python and Fundamental Excel courses",
    technology: "Coding Studio — formalized the Python skills I'd been using since the sensor project.",
  },
  {
    date: "Nov 2024",
    kind: "role",
    title: "Joined BozzMobil as PA & IT",
    built: "Took ownership of the company website and the vehicle inventory database, and started integrating marketplace and social channels to route leads toward sales.",
    technology: "WordPress/Elementor, database management, SEO/SEM",
  },
  {
    date: "2026",
    kind: "build",
    title: "Built jaecooplu.co.id solo, end to end, with Next.js",
    built: "A dealership showcase site with a video hero, per-model pages, a dealer locator, and a WhatsApp booking flow — my first fully self-directed Next.js build.",
    technology: "Next.js (App Router), React, TypeScript, Tailwind CSS",
    challenge: "Structuring dynamic routes so each car model (J5, J7, J8) had its own clean, maintainable page instead of duplicated markup.",
    solution: "Used the App Router's dynamic route segments to render each model from shared components driven by per-model data — one template, three pages.",
  },
  {
    date: "2026 — ongoing",
    kind: "learning",
    title: "Deepening TypeScript and component architecture",
    built: "This portfolio — used it as a real project to practice typed data layers, reusable components, and a structure that can later support a CMS.",
    technology: "TypeScript, Next.js App Router, Tailwind CSS",
  },
  {
    date: "Next",
    kind: "learning",
    title: "Learning Solidity and Web3 fundamentals",
    technology: "Solidity, Ethereum, Web3.js/Ethers.js",
    isPlaceholder: true,
  },
];
