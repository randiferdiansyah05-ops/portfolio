import type { Project } from "@/lib/types";

// Every entry below reflects work Randi actually did. The one "planned"
// entry is explicitly a roadmap item, not a shipped project — it exists so
// the Web3 direction is visible without pretending it's finished.

export const projects: Project[] = [
  {
    slug: "jaecoo-plu",
    name: "JAECOO Serpong Dealership Site",
    tagline: "A dealership showcase site, built solo with Next.js from scratch.",
    status: "live",
    context: "Solo project",
    problem:
      "JAECOO's Serpong dealership (Prima Laju Utama) needed a fast, modern site to present its car lineup — J5, J7, and J8 — and turn visitors into test-drive bookings, without the overhead of a page builder.",
    approach:
      "Built end-to-end with the Next.js App Router: a video-driven hero, per-model pages with their own routes, a dealer-locator section linking out to Google Maps, and a WhatsApp deep link pre-filled with a booking message so a visitor can go from browsing to messaging the showroom in one tap.",
    features: [
      "Dynamic routes for each car model (/cars/j5, /cars/j7, /cars/j8)",
      "Full-bleed video hero with responsive fallbacks",
      "Dealer location section with a direct Google Maps link",
      "One-tap WhatsApp booking CTA with a pre-filled message",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Sole developer — planned, built, and shipped the site independently.",
    links: [{ label: "Live site", href: "https://jaecooplu.co.id" }],
  },
  {
    slug: "bozzmobil-platform",
    name: "BozzMobil — Web & Inventory Operations",
    tagline: "Managing the technical and data backbone of a used-car dealership's online presence.",
    status: "live",
    context: "Technical operations",
    problem:
      "BozzMobil needed its inventory, website, and lead sources kept accurate and in sync — every unit listed had to match real stock, and leads from the marketplace and social channels needed a reliable path into an actual sale.",
    approach:
      "Owns the company website (WordPress/Elementor) day to day, alongside the inventory database that tracks units in and out. Integrated the site with automotive marketplace listings and social channels to route consumer leads toward conversion, and runs SEO/SEM to keep listings discoverable.",
    features: [
      "Inventory database management for incoming and outgoing units",
      "Website content and listings management",
      "Marketplace + social channel integration for lead routing",
      "Ongoing SEO/SEM to improve listing visibility",
    ],
    stack: ["WordPress", "Elementor", "SEO/SEM", "Google Ads", "Meta Ads"],
    role: "PA & IT — handles both the business-operations side and the technical/website side.",
    links: [{ label: "Live site", href: "https://bozzmobil.com" }],
  },
  {
    slug: "smart-irrigation",
    name: "Automated Plant Watering System (YL-69 Sensor)",
    tagline: "Academic project: soil-moisture-triggered irrigation with a Telegram bot interface.",
    status: "live",
    context: "Academic project — Universitas Gunadarma",
    problem:
      "Elephant-ear plants (tanaman kuping gajah) need consistent watering based on actual soil moisture, not a fixed schedule — and the grower needed a way to monitor and control watering remotely.",
    approach:
      "Designed a controller-based program that reads temperature and soil moisture via a YL-69 sensor and triggers watering automatically, then built a Telegram bot as the user-facing interface for monitoring and control.",
    features: [
      "Automatic watering triggered by real sensor readings",
      "Temperature-aware watering logic",
      "Telegram bot interface for remote monitoring",
    ],
    stack: ["Python", "YL-69 Sensor", "Microcontroller", "Telegram Bot API"],
    role: "Solo — final academic writing project (Penulisan Ilmiah).",
    links: [],
    isPlaceholder: false,
  },
  {
    slug: "web3-roadmap",
    name: "Web3 / Smart Contract Learning Project",
    tagline: "Next up: applying the same product-building approach to Web3.",
    status: "planned",
    context: "Roadmap — not started",
    problem:
      "PLACEHOLDER: define a real problem once a concrete idea is chosen (e.g. a small dApp, a wallet-connected tool, or a Solidity contract paired with a Next.js frontend).",
    approach:
      "PLACEHOLDER: replace with the actual approach once this is underway.",
    features: [
      "PLACEHOLDER — replace with real features once in progress",
    ],
    stack: ["Solidity", "Ethereum", "Web3.js / Ethers.js"],
    role: "PLACEHOLDER",
    links: [],
    isPlaceholder: true,
  },
];
