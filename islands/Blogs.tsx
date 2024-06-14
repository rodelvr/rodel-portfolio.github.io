import { Icon } from "@iconify-icon/react";

interface Blog {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
  image: string;
}

export default function Blogs() {
  const blogs: Blog[] = [
    {
      title: "Data Platform",
      description: "Building a data platform from scratch at Solvimon.",
      link:
        "https://medium.com/@rodelvanrooijen/data-platform-from-scratch-on-gcp-da599253cea0",
      type: "Cloud",
      icon: "devicon:google",
      image: "img/solvimon_homepage.webp",
    },
    {
      title: "Contextual Bandits",
      description:
        "Developing the first live machine learning use case at Adyen.",
      link:
        "https://medium.com/adyen/optimizing-payment-conversion-rates-using-contextual-multi-armed-bandits-644e543e9c0e",
      type: "ML",
      icon: "gravity-ui:abbr-ml",
      image: "img/rodel_adyen.webp",
    },
    {
      title: "Embedded Analytics",
      description:
        "Choosing the right embedded analytics tool as a SaaS company.",
      link:
        "https://medium.com/@rodelvanrooijen/embedded-analytics-in-b2b-saas-a-comparison-f35522cd1605",
      type: "Analytics",
      icon: "fluent-mdl2:analytics-view",
      image: "img/embeddable.webp",
    },
    {
      title: "Deploying Airflow",
      description: "How to deploy Airflow on GCP using Kubernetes.",
      link:
        "https://medium.com/@rodelvanrooijen/airflow-on-gke-using-helm-15ca05c11364",
      type: "Infrastructure",
      icon: "skill-icons:kubernetes",
      image: "img/airflow_kubernetes.webp",
    },
    {
      title: "Deploying Airbyte",
      description: "How to deploy Airbyte on GCP using Kubernetes.",
      link:
        "https://medium.com/@rodelvanrooijen/deploying-airbyte-on-gke-using-helm-bb15d19c2d1e",
      type: "Infrastructure",
      icon: "skill-icons:kubernetes",
      image: "img/airbyte_kubernetes.webp",
    },
  ];

  return (
    <section className="p-4 my-8">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Blogs
      </h1>
      <div className="pt-4 flex flex-wrap justify-center items-center gap-2">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="card max-w-96 border border-gray-300 rounded-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="card-body p-4">
              <h2 className="card-title flex items-center">
                <Icon
                  className="w-6 h-6"
                  icon={blog.icon}
                  width="none"
                  height="none"
                />
                {blog.title}
                <span className="badge badge-ghost ml-auto">{blog.type}</span>
              </h2>
              <p>{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base-100"
              >
                Read Blog
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
