import type { Post } from "./types.ts";

/** Earlier long-form posts on Medium. */
export const mediumPosts: Post[] = [
  {
    title: "Data Platform",
    description: "Building a data platform from scratch at Solvimon.",
    url:
      "https://medium.com/@rodelvanrooijen/data-platform-from-scratch-on-gcp-da599253cea0",
    image: "/img/solvimon_homepage.webp",
    source: "medium",
    topic: "Cloud",
    icon: "devicon:google",
  },
  {
    title: "Contextual Bandits",
    description:
      "Developing the first live machine learning use case at Adyen.",
    url:
      "https://medium.com/adyen/optimizing-payment-conversion-rates-using-contextual-multi-armed-bandits-644e543e9c0e",
    image: "/img/rodel_adyen.webp",
    source: "medium",
    topic: "ML",
    icon: "gravity-ui:abbr-ml",
  },
  {
    title: "Embedded Analytics",
    description:
      "Choosing the right embedded analytics tool as a SaaS company.",
    url:
      "https://medium.com/@rodelvanrooijen/embedded-analytics-in-b2b-saas-a-comparison-f35522cd1605",
    image: "/img/embeddable.webp",
    source: "medium",
    topic: "Analytics",
    icon: "fluent-mdl2:analytics-view",
  },
  {
    title: "Deploying Airflow",
    description: "How to deploy Airflow on GCP using Kubernetes.",
    url:
      "https://medium.com/@rodelvanrooijen/airflow-on-gke-using-helm-15ca05c11364",
    image: "/img/airflow_kubernetes.webp",
    source: "medium",
    topic: "Infrastructure",
    icon: "skill-icons:kubernetes",
  },
  {
    title: "Deploying Airbyte",
    description: "How to deploy Airbyte on GCP using Kubernetes.",
    url:
      "https://medium.com/@rodelvanrooijen/deploying-airbyte-on-gke-using-helm-bb15d19c2d1e",
    image: "/img/airbyte_kubernetes.webp",
    source: "medium",
    topic: "Infrastructure",
    icon: "skill-icons:kubernetes",
  },
];
