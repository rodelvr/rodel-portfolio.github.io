import { Icon } from "@iconify-icon/react";

interface Blog {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
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
    },
    {
      title: "Contextual Bandits",
      description:
        "Developing the first live machine learning use case at Adyen.",
      link:
        "https://medium.com/adyen/optimizing-payment-conversion-rates-using-contextual-multi-armed-bandits-644e543e9c0e",
      type: "ML",
      icon: "gravity-ui:abbr-ml",
    },
    {
      title: "Embedded Analytics",
      description:
        "Choosing the right embedded analytics tool as a SaaS company.",
      link:
        "https://medium.com/@rodelvanrooijen/embedded-analytics-in-b2b-saas-a-comparison-f35522cd1605",
      type: "Analytics",
      icon: "fluent-mdl2:analytics-view",
    },
    {
      title: "Deploying Airflow",
      description: "How to deploy Airflow on GCP using Kubernetes.",
      link:
        "https://medium.com/@rodelvanrooijen/airflow-on-gke-using-helm-15ca05c11364",
      type: "Infrastructure",
      icon: "skill-icons:kubernetes",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Blogs
      </h1>
      <div class="pt-4 flex flex-wrap justify-center items-center gap-2">
        {blogs.map((blog) => (
          <div class="card max-w-96 border border-gray-300 rounded-md">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={blog.icon}
                  width="none"
                  height="none"
                />
                {blog.title}
                <span class="badge badge-ghost ml-auto">{blog.type}</span>
              </h2>
              <p>{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                class="btn btn-primary text-base-100"
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
