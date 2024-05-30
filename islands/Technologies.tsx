import { Icon } from "@iconify-icon/react";

interface Technology {
  name: string;
  icon: string;
  url: string;
  category: string;
}

export default function Technologies() {
  const technologies: Technology[] = [
    {
      name: "Python",
      icon: "devicon:python",
      url: "https://python.org/",
      category: "software engineering",
    },
    {
      name: "Docker",
      icon: "skill-icons:docker",
      url: "https://www.docker.com/",
      category: "software engineering",
    },
    {
      name: "Kubernetes",
      icon: "devicon:kubernetes",
      url: "https://kubernetes.io/",
      category: "software engineering",
    },
    {
      name: "Gitlab",
      icon: "vscode-icons:file-type-gitlab",
      url: "https://www.gitlab.com/",
      category: "software engineering",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:square-github",
      url: "https://www.github.com/",
      category: "software engineering",
    },
    {
      name: "Spark",
      icon: "devicon:apachespark",
      url: "https://spark.apache.org/",
      category: "data engineering",
    },
    {
      name: "Airflow",
      icon: "logos:airflow-icon",
      url: "https://airflow.apache.org/",
      category: "data engineering",
    },
    {
      name: "BigQuery",
      icon: "simple-icons:googlebigquery",
      url: "https://cloud.google.com/bigquery",
      category: "data engineering",
    },
    {
      name: "Snowflake",
      icon: "logos:snowflake-icon",
      url: "https://www.snowflake.com/",
      category: "data engineering",
    },
    {
      name: "Jupyter",
      icon: "logos:jupyter",
      url: "https://jupyter.org",
      category: "data science",
    },
    {
      name: "MLFlow",
      icon: "simple-icons:mlflow",
      url: "https://mlflow.org",
      category: "data science",
    },
    {
      name: "Dask",
      icon: "simple-icons:dask",
      url: "https://dask.org",
      category: "data science",
    },
    {
      name: "Scikit-learn",
      icon: "devicon:scikitlearn",
      url: "https://scikit-learn.org",
      category: "data science",
    },
    {
      name: "Javascript",
      icon: "vscode-icons:file-type-js-official",
      url: "https://www.javascript.com/",
      category: "front-end",
    },
    {
      name: "React",
      icon: "skill-icons:react-dark",
      url: "https://react.dev/",
      category: "front-end",
    },
    {
      name: "Deno",
      icon: "devicon:denojs",
      url: "https://www.deno.com/",
      category: "front-end",
    },
    {
      name: "HTML5",
      icon: "devicon:html5",
      url: "https://html.com/html5/",
      category: "front-end",
    },
    {
      name: "Tailwind CSS",
      icon: "devicon:tailwindcss",
      url: "https://tailwindcss.com/",
      category: "front-end",
    },
  ];

  const categories = [...new Set(technologies.map((tech) => tech.category))];

  return (
    <section className="my-16 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div
        className="pt-4 grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {categories.map((category) => (
          <div
            key={category}
            className="p-4 border border-gray-300 rounded-md"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies
                .filter((tech) => tech.category === category)
                .map((technology) => (
                  <a
                    href={technology.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center mb-2"
                    style={{ flex: "0 0 auto" }}
                  >
                    <Icon
                      className="w-8 h-8"
                      icon={technology.icon}
                      width="none"
                      height="none"
                    />
                    <div className="tooltip absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-sm rounded py-1 px-2 opacity-0 transition-opacity duration-300 pointer-events-none">
                      {technology.name}
                    </div>
                  </a>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
