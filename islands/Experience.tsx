import { useRef, useState } from "preact/hooks";

interface JobExperience {
  title: string;
  timePeriod: string;
  location: string;
  description: string;
  details?: string;
}

interface CompanyExperience {
  company: string;
  logo: string;
  website: string;
  jobs: JobExperience[];
  companyLocation: string;
}

function JobDetails({ job }: { job: JobExperience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Split the details by newlines to create paragraphs
  const detailsParagraphs = job.details
    ? job.details.trim().split("\n").map((str, index) => (
      <p key={index} className="job-description-paragraph mt-2">
        {str.trim()}
      </p>
    ))
    : null;

  // Include the time spent in the job in the time period
  const jobTimePeriod = job.timePeriod.includes("(")
    ? job.timePeriod
    : `${job.timePeriod} (${calculateTotalTime([job])})`;

  return (
    <div
      className={`job-experience mb-2 ${isExpanded ? "expanded" : ""}`}
      style={{ width: "90%" }}
    >
      <h2 className="job-title">{job.title}</h2>
      <p className="job-time-period mb-1">{jobTimePeriod}</p>
      <p className="job-location">{job.location}</p>
      <button
        onClick={toggleExpand}
        className="btn btn-primary text-base-100 mt-2 btn-sm"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
      <div
        ref={detailsRef}
        className="job-details"
        style={{
          maxHeight: isExpanded ? `${detailsRef.current?.scrollHeight}px` : 0,
        }}
      >
        {detailsParagraphs}
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences: CompanyExperience[] = [
    {
      company: "Solvimon",
      companyLocation: "Utrecht, Netherlands",
      logo: "/logos/solvimon_logo.jpeg",
      website: "https://www.solvimon.com/",
      jobs: [
        {
          title: "Founding Engineer",
          timePeriod: "Jul 2023 - Jun 2024",
          location: "Utrecht, Netherlands",
          description: "Read more",
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
      company: "Adyen",
      logo: "/logos/adyen_logo.png",
      companyLocation: "Amsterdam, Netherlands",
      website: "https://www.adyen.com/",
      jobs: [
        {
          title: "Engineering Lead, Analytics & ML",
          timePeriod: "Jan 2023 - Jun 2023",
          location: "Amsterdam, Netherlands",
          description: "Read more",
          details: `
            I managed multiple teams. 

            I was responsible for payments analytics and machine learning (30+ FTE) . Among others, this included machine learning for fraud detection and the merchant facing insights (dashboards) product. I was the hiring manager for all data science related positions in the company.
          `,
        },
        {
          title: "Tech Lead Manager, Machine Learning",
          timePeriod: "Jan 2021 - Dec 2022",
          location: "Amsterdam, Netherlands",
          description: "Read more",
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
          description: "Read more",
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
      company: "ING",
      logo: "/logos/ing_logo_lion.png",
      companyLocation: "Amsterdam, Netherlands",
      website: "https://www.ing.nl/",
      jobs: [
        {
          title: "Data Scientist",
          timePeriod: "Jun 2016 - Jun 2018",
          location: "Amsterdam, Netherlands",
          description: "Read more",
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

  return (
    <>
      <h1 className="pt-8 text-3xl font-bold text-primary text-center mb-4">
        Work Experience
      </h1>
      <section className="pt-4 p-4">
        {experiences.map((experience, idx) => (
          <div key={experience.company}>
            <div
              className="company-section mb-8"
              style={{ width: "90%", maxWidth: "500px", margin: "auto" }}
            >
              <div className="company-info flex items-center mb-4">
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="company-logo mr-4"
                    style={{ width: "50px", height: "25%" }}
                  />
                </a>
                <div className="company-details flex flex-col">
                  <div className="company-name text-2xl font-semibold">
                    {experience.company}
                  </div>
                  <div className="company-location">
                    {experience.companyLocation}
                  </div>
                  {/* Calculate and display total time for the company */}
                  <div className="company-total-time">
                    {" "}
                    {calculateTotalTime(experience.jobs)}
                    {" "}
                  </div>
                </div>
              </div>
              <div className="company-jobs flex flex-col mt-4">
                {experience.jobs.map((job, index) => (
                  <div key={index}>
                    <JobDetails job={job} />
                    {index < experience.jobs.length - 1 && (
                      <hr className="horizontal-separator mb-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Add separator with three vertical dots between cards */}
            {idx < experiences.length - 1 && (
              <div className="separator mb-4">
                <div className="vertical-dots">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

// Function to calculate total time at the company
function calculateTotalTime(jobs: JobExperience[]): string {
  if (jobs.length === 0) return "";

  const startDates = jobs.map((job) => parseStartDate(job.timePeriod));
  const endDates = jobs.map((job) => parseEndDate(job.timePeriod));

  const minStartDate = new Date(
    Math.min(...startDates.map((date) => date.getTime())),
  );
  const maxEndDate = new Date(
    Math.max(...endDates.map((date) => date.getTime())),
  );

  const totalMonths =
    (maxEndDate.getFullYear() - minStartDate.getFullYear()) * 12 +
    (maxEndDate.getMonth() - minStartDate.getMonth()) + 1; // Adding 1 month

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let totalTimeString = "";

  if (years > 0) {
    totalTimeString += `${years} ${years === 1 ? "year" : "years"}`;
    if (months > 0) {
      totalTimeString += ` and ${months} ${months === 1 ? "month" : "months"}`;
    }
  } else if (months > 0) {
    totalTimeString += `${months} ${months === 1 ? "month" : "months"}`;
  }

  return totalTimeString;
}

// Function to parse start date from time period string
function parseStartDate(timePeriod: string): Date {
  const [start] = timePeriod.split(" - ");
  const [startMonth, startYear] = start.split(" ");
  return new Date(`${startMonth} 1, ${startYear}`);
}

// Function to parse end date from time period string
function parseEndDate(timePeriod: string): Date {
  const [, end] = timePeriod.split(" - ");
  const [endMonth, endYear] = end.split(" ");

  if (endYear && endYear.toLowerCase() === "now") {
    return new Date(); // Return current date if end year is "now"
  } else if (endMonth && endYear) {
    // Construct the end date string and convert it to a Date object
    const endDateString = `${endMonth} 1, ${endYear}`;
    return new Date(endDateString);
  } else {
    return new Date(); // Return null if end month or end year is missing
  }
}
