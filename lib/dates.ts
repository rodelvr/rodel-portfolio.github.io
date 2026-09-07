export interface TimePeriod {
  /** e.g. "Jan 2021 - Dec 2022" or "Nov 2024 - now". */
  timePeriod: string;
}

/** Format the total time spanned by the given jobs, e.g. "2 years and 3 months". */
export function calculateTotalTime(
  jobs: TimePeriod[],
  now: Date = new Date(),
): string {
  if (jobs.length === 0) return "";

  const start = earliestStart(jobs);
  const end = new Date(
    Math.max(...jobs.map((job) => parseEndDate(job.timePeriod, now).getTime())),
  );

  // Both ends are inclusive months, hence the extra month.
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(plural(years, "year"));
  if (months > 0) parts.push(plural(months, "month"));
  return parts.join(" and ");
}

/** Whole years between the earliest start date of the given jobs and now. */
export function yearsSince(jobs: TimePeriod[], now: Date = new Date()): number {
  if (jobs.length === 0) return 0;
  const start = earliestStart(jobs);
  const years = now.getFullYear() - start.getFullYear();
  return now.getMonth() < start.getMonth() ? years - 1 : years;
}

export function parseStartDate(timePeriod: string): Date {
  const [start] = timePeriod.split(" - ");
  return parseMonth(start);
}

export function parseEndDate(
  timePeriod: string,
  now: Date = new Date(),
): Date {
  const [, end] = timePeriod.split(" - ");
  // "now", "present" or a missing end date all mean the job is ongoing.
  if (!end || /^(now|present)$/i.test(end.trim())) return now;
  return parseMonth(end);
}

function earliestStart(jobs: TimePeriod[]): Date {
  return new Date(
    Math.min(...jobs.map((job) => parseStartDate(job.timePeriod).getTime())),
  );
}

function parseMonth(value: string): Date {
  const [month, year] = value.trim().split(" ");
  return new Date(`${month} 1, ${year}`);
}

function plural(count: number, unit: string): string {
  return `${count} ${unit}${count === 1 ? "" : "s"}`;
}
