import type { Post } from "./types.ts";

export const newsletter = {
  name: "The Data Canal",
  url: "https://thedatacanal.substack.com",
  archiveUrl: "https://thedatacanal.substack.com/archive",
  description:
    "My newsletter with insights into data & AI tooling, architecture and careers in data.",
} as const;

const BASE = "https://thedatacanal.substack.com/p/";
const IMG = "/img/substack/";

function post(
  slug: string,
  date: string,
  title: string,
  description: string,
): Post {
  return {
    title,
    description,
    url: BASE + slug,
    image: `${IMG}${slug}.webp`,
    source: "newsletter",
    date,
  };
}

/** Posts from The Data Canal on Substack, newest first. */
export const newsletterPosts: Post[] = [
  post(
    "the-agentic-future-of-data-analytics",
    "2025-07-31",
    "The Agentic future of Data Analytics",
    "How will Data Analytics change with the rise of AI? My view on the most prominent use cases and how it will shape the domain going forward.",
  ),
  post(
    "optimising-ai-with-textual-feedback",
    "2025-04-02",
    "Optimising AI with textual feedback: A look at TextGrad and AdalFlow",
    "What if there's a way to optimise for AI model outcomes without changing the underlying model? A deep-dive into optimising model inputs against any measurable metric.",
  ),
  post(
    "airflow-30-dag-versioning-multi-language",
    "2025-03-05",
    "Airflow 3.0: DAG versioning, multi-language support and native AI/ML workflows",
    "The biggest release for Airflow in years is coupled with a few long outstanding quality of life changes. What are those, and how will they improve your day-to-day as an Airflow user?",
  ),
  post(
    "structuring-data-teams-building-an",
    "2025-02-27",
    "Structuring data teams: Building an effective data organisation",
    "A well-established data organisation is necessary to harness the full potential of data & AI. What does a successful data organisation look like and what are the factors of success?",
  ),
  post(
    "climbing-the-data-career-ladder-and",
    "2025-02-19",
    "Climbing the data career ladder, and descending it again",
    "First-hand experiences from a data professional that climbed to director level and went back to being an individual contributor.",
  ),
  post(
    "battle-of-the-llms-picking-the-right",
    "2025-02-12",
    "Battle of the LLMs: Picking the right model",
    "With new LLMs being launched every week, how to keep up and judge which one to use?",
  ),
  post(
    "data-analytics-current-trends-and",
    "2025-02-05",
    "Current trends in the field of data analytics",
    "Data analytics capabilities are top of mind for companies. With the rise of self-serve analytics, embedded analytics and AI agents for analytics, where are we headed?",
  ),
  post(
    "airflow-30-architectural-changes",
    "2025-01-28",
    "Airflow 3.0: Architectural changes",
    "The most exciting Airflow release in years is on the horizon, and it's coupled with big architectural changes.",
  ),
  post(
    "choosing-a-code-editor-for-python",
    "2025-01-28",
    "Choosing a code editor for Python",
    "A comparison between PyCharm, VS Code, and JupyterLab for Python programming.",
  ),
];
