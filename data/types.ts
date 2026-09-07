/** Shared content types for the data modules in this directory. */

export interface Post {
  title: string;
  description: string;
  url: string;
  image: string;
  /** Where the post was published. */
  source: "newsletter" | "medium";
  /** ISO publication date (newsletter posts). */
  date?: string;
  /** Topic label and Iconify icon (Medium posts). */
  topic?: string;
  icon?: string;
}

export interface Talk {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  /** "video" links to a recording, "slides" to a PDF, "event" to an event page. */
  kind: "video" | "slides" | "event";
  /** What I did there. */
  role: "speaker" | "panelist" | "organiser";
}

export interface Strength {
  title: string;
  description: string;
  image: string;
}

export interface Technology {
  name: string;
  icon: string;
  url: string;
  category: "software engineering" | "data engineering" | "data science";
}

export interface Job {
  title: string;
  /** e.g. "Jan 2021 - Dec 2022" or "Nov 2024 - now". */
  timePeriod: string;
  location: string;
  /** Multi-line details; lines starting with "- " become bullets. */
  details?: string;
}

export interface Company {
  name: string;
  location: string;
  logo: string;
  website: string;
  jobs: Job[];
}
