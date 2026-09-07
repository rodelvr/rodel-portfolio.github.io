import type { Technology } from "./types.ts";

const SE = "software engineering";
const DE = "data engineering";
const DS = "data science";

export const technologies: Technology[] = [
  {
    name: "Python",
    icon: "devicon:python",
    url: "https://python.org/",
    category: SE,
  },
  { name: "Go", icon: "devicon:go", url: "https://go.dev/", category: SE },
  {
    name: "TypeScript",
    icon: "devicon:typescript",
    url: "https://www.typescriptlang.org/",
    category: SE,
  },
  {
    name: "React",
    icon: "skill-icons:react-dark",
    url: "https://react.dev/",
    category: SE,
  },
  {
    name: "Tailwind CSS",
    icon: "devicon:tailwindcss",
    url: "https://tailwindcss.com/",
    category: SE,
  },
  {
    name: "Docker",
    icon: "skill-icons:docker",
    url: "https://www.docker.com/",
    category: SE,
  },
  {
    name: "Kubernetes",
    icon: "devicon:kubernetes",
    url: "https://kubernetes.io/",
    category: SE,
  },
  {
    name: "Gitlab",
    icon: "vscode-icons:file-type-gitlab",
    url: "https://www.gitlab.com/",
    category: SE,
  },
  {
    name: "GitHub",
    icon: "fa6-brands:square-github",
    url: "https://www.github.com/",
    category: SE,
  },
  {
    name: "Spark",
    icon: "devicon:apachespark",
    url: "https://spark.apache.org/",
    category: DE,
  },
  {
    name: "Airflow",
    icon: "logos:airflow-icon",
    url: "https://airflow.apache.org/",
    category: DE,
  },
  {
    name: "BigQuery",
    icon: "simple-icons:googlebigquery",
    url: "https://cloud.google.com/bigquery",
    category: DE,
  },
  {
    name: "Snowflake",
    icon: "logos:snowflake-icon",
    url: "https://www.snowflake.com/",
    category: DE,
  },
  {
    name: "dlt",
    icon: "simple-icons:dlthub",
    url: "https://dlthub.com/",
    category: DE,
  },
  {
    name: "ClickHouse",
    icon: "devicon:clickhouse",
    url: "https://clickhouse.com/",
    category: DE,
  },
  {
    name: "Jupyter",
    icon: "logos:jupyter",
    url: "https://jupyter.org",
    category: DS,
  },
  {
    name: "MLFlow",
    icon: "simple-icons:mlflow",
    url: "https://mlflow.org",
    category: DS,
  },
  {
    name: "Dask",
    icon: "simple-icons:dask",
    url: "https://dask.org",
    category: DS,
  },
  {
    name: "Scikit-learn",
    icon: "devicon:scikitlearn",
    url: "https://scikit-learn.org",
    category: DS,
  },
];

/** Categories in display order, derived from the list above. */
export const technologyCategories = [
  ...new Set(technologies.map((tech) => tech.category)),
];
