import type { Company } from "../data/types.ts";
import JobDetails from "../islands/job-details.tsx";
import { calculateTotalTime } from "../lib/dates.ts";
import { slugify } from "../lib/text.ts";
import { Badge } from "./ui/badge.tsx";
import { Card, CardContent, CardHeader } from "./ui/card.tsx";
import { Calendar, MapPin } from "./ui/icons.tsx";

/** One company on the experience timeline, with its logo as the timeline node. */
export function CompanyCard({ company }: { company: Company }) {
  return (
    <li class="mb-10 ml-8 last:mb-0 sm:ml-12">
      <a
        href={company.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${company.name} website`}
        class="absolute -left-5 flex size-10 items-center justify-center overflow-hidden rounded-full border bg-white shadow-sm ring-4 ring-background transition-transform hover:scale-105 sm:-left-6 sm:size-12"
      >
        <img
          src={company.logo}
          alt={`${company.name} logo`}
          loading="lazy"
          class="size-full object-contain p-1.5"
        />
      </a>

      <Card>
        <CardHeader class="pb-4">
          <div class="flex flex-wrap items-start justify-between gap-2">
            <div>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl font-semibold tracking-tight hover:underline"
              >
                {company.name}
              </a>
              <p class="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin />
                {company.location}
              </p>
            </div>
            <Badge variant="secondary">
              <Calendar />
              {calculateTotalTime(company.jobs)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent class="divide-y">
          {company.jobs.map((job) => (
            <div key={job.title} class="py-4 first:pt-0 last:pb-0">
              <h3 class="font-medium">{job.title}</h3>
              <p class="mt-1 text-sm text-muted-foreground">
                {job.timePeriod} · {calculateTotalTime([job])}
              </p>
              <p class="text-sm text-muted-foreground">{job.location}</p>
              {job.details && (
                <JobDetails
                  id={slugify(`${company.name}-${job.title}`)}
                  details={job.details}
                />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </li>
  );
}
