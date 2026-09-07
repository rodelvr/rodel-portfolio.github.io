import type { Company } from "./types.ts";

/** Work experience, most recent company first. */
export const experience: Company[] = [
  {
    name: "Palm",
    location: "Remote",
    logo: "/logos/usepalm_logo.jpeg",
    website: "https://www.usepalm.com/",
    jobs: [
      {
        title: "CTO",
        timePeriod: "Jul 2026 - now",
        location: "Amsterdam, Netherlands",
        details: `
          We build an AI-native company that is re-imagining the world of enterprise treasury & finance.
        `,
      },
      {
        title: "VP of Engineering",
        timePeriod: "May 2025 - Jun 2026",
        location: "Amsterdam, Netherlands",
        details: `
          Building a next-generation AI-native engineering organisation. We ship continuously, using AI workflows.
        `,
      },
      {
        title: "Data & AI Lead",
        timePeriod: "Nov 2024 - Apr 2025",
        location: "Amsterdam, Netherlands",
        details: `
          As first data hire, I led building data & AI products through hands-on back-end, data and ML engineering.
        `,
      },
    ],
  },
  {
    name: "Achmea",
    location: "Apeldoorn, Netherlands",
    logo: "/logos/achmea_logo copy.png",
    website: "https://www.achmea.nl/",
    jobs: [
      {
        title: "Senior Machine Learning Engineer",
        timePeriod: "Jul 2024 - Oct 2024",
        location: "Apeldoorn, Netherlands",
        details: `
          I've helped shape a next-generation MLOps platform to power the creation and deployment of the latest ML models for insurance pricing.
        `,
      },
    ],
  },
  {
    name: "Solvimon",
    location: "Utrecht, Netherlands",
    logo: "/logos/solvimon_logo.jpeg",
    website: "https://www.solvimon.com/",
    jobs: [
      {
        title: "Founding Engineer",
        timePeriod: "Jul 2023 - Jun 2024",
        location: "Utrecht, Netherlands",
        details: `
          I set-up the data platform and built data products on top of it.
          Achievements:
          - Built a state of the art data platform from scratch using Airflow, BigQuery, Spark and Airbyte. With continuous deployment using Gitlab CI/CD and infra deployed on Kubernetes.
          - Built an embedded analytics and reporting product based on self-service dashboards and reports for usage metering, invoicing and revenue recognition.
          - Built back-end data services using Docker, Python, Postgres and FastAPI to power data products, e.g. data imports, data exports, reporting & analytics.
          - Built data syncing for CRMs (HubSpot, Salesforce) and other third party integrations (e.g. Email).
        `,
      },
    ],
  },
  {
    name: "Adyen",
    location: "Amsterdam, Netherlands",
    logo: "/logos/adyen_logo.png",
    website: "https://www.adyen.com/",
    jobs: [
      {
        title: "Engineering Lead, Analytics & ML",
        timePeriod: "Jan 2023 - Jun 2023",
        location: "Amsterdam, Netherlands",
        details: `
          I managed multiple teams.

          I was responsible for payments analytics and machine learning (30+ FTE). Among others, this included machine learning for fraud detection and the merchant facing insights (dashboards) product. I was the hiring manager for all data science related positions in the company.
        `,
      },
      {
        title: "Tech Lead Manager, Machine Learning",
        timePeriod: "Jan 2021 - Dec 2022",
        location: "Amsterdam, Netherlands",
        details: `
          I managed and built teams.

          During my first year as TLM I built up the machine learning team for conversion optimisation. During my second year, I took on leading the team responsible for fraud detection.

          Achievements:
          - Managed teams that ranged from 4 to 15 people, taking up people management and technical leadership.
          - Expanded the biggest ML use case in Adyen to be scored 3 billion times in the live payments flow. Increasing the revenue gained further by showing significant outperformance (against a control) for all top merchants.
          - My team launched the ML solution for determining payment authentication to be a global solution. The solution chooses when to use authentication and which version to use.
          - Helped launch and build a first iteration of an experimentation platform with the aim of simplifying product and machine learning experiments.
          - Helped launch Automated Risk, the first machine learning based fraud prevention that was built into the RevenueProtect product.
          - Hiring manager in 2021 for all Data Science positions in Adyen (over 10 hires in one year). Set-up the interview process (case study, technical interview).
        `,
      },
      {
        title: "Senior Machine Learning Scientist",
        timePeriod: "Jul 2018 - Dec 2020",
        location: "Amsterdam, Netherlands",
        details: `
          I've worked on the first ML in production use cases at Adyen.

          Achievements:
          - Developed Adyen's first live machine learning model from concept to production. This increased conversion rates across a variety of products, e.g. customer authentication, payment messaging, recovering failed payments. The overall revenue uplift increased by hundreds of millions of euros compared to the baseline, bolstering Adyen's market leading position in terms of revenue / value add.
          - Producing product insights by creating ETL pipelines and building data pipeline orchestration. Thereby laying the building blocks of Adyen's Big Data Platform.
          - Helped create and launch a data science based solution to rescue subscription based payments (AutoRescue). At inception it rescued hundreds of thousand euros on a monthly basis.
        `,
      },
    ],
  },
  {
    name: "ING",
    location: "Amsterdam, Netherlands",
    logo: "/logos/ing_logo_lion.png",
    website: "https://www.ing.nl/",
    jobs: [
      {
        title: "Data Scientist",
        timePeriod: "Jun 2016 - Jun 2018",
        location: "Amsterdam, Netherlands",
        details: `
          I've worked on the roll-out and validation of machine learning models.

          Achievements:
          - Model risk evaluation and model validation of interest rate, deposits and prepayment asset and liability management models.
          - Roll-out of new rate sensitive deposits model (Volume of Savings, VOS) across all ING locations.
          - Scenario analysis of convexity risk in savings and mortgage portfolio for interest rate risk to use in capital calculations.
        `,
      },
    ],
  },
];
