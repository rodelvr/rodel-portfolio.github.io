import type { Talk } from "./types.ts";

/** Talks, panels and events I organised, newest first. */
export const talks: Talk[] = [
  {
    title:
      "Incidents for Data Teams: Detection, Ownership & On-Call Realities (Amsterdam Data Union)",
    description:
      "Panel discussion on how data teams handle production data failures: detection, on-call and blameless postmortems.",
    url: "https://www.meetup.com/amsterdam-data-union-meetup/events/314704948/",
    thumbnail: "/img/amsterdam_data_union_2026.jpeg",
    kind: "event",
    role: "panelist",
  },
  {
    title: "AI Agents in Production: Real Use Cases, Real Value (Amsterdam)",
    description:
      "Meetup I organised with two Amsterdam fintech teams showing production AI systems: bank reconciliation automation and AI-driven forecasting.",
    url: "https://luma.com/9a6ru5yi",
    thumbnail: "/img/ai_agents_in_production_2026.jpg",
    kind: "event",
    role: "organiser",
  },
  {
    title: "Multi-tenant Conversational Analytics (PyCon DE & PyData 2025)",
    description:
      "A deep dive into building secure, scalable conversational analytics for many customers at once.",
    url: "https://www.youtube.com/watch?v=HHr7AGN2xAA",
    thumbnail: "/img/pycon_de_2025.jpg",
    kind: "video",
    role: "speaker",
  },
  {
    title: "Building a Data Platform from scratch (PyData Amsterdam 2024)",
    description:
      "Sharing my experience on building a data platform from scratch.",
    url: "https://www.youtube.com/watch?v=1GGAHPVY2Io",
    thumbnail: "/img/pydata_2024.jpeg",
    kind: "video",
    role: "speaker",
  },
  {
    title: "Building Big Data Infrastructure (Spark + AI Summit 2019)",
    description:
      "How the data platform was built and how ML is managed at Adyen.",
    url: "https://www.youtube.com/watch?v=lirZVxWiczw",
    thumbnail: "/img/thumbnail_youtube1.webp",
    kind: "video",
    role: "speaker",
  },
];
