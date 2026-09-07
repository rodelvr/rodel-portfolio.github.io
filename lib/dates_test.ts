import { assertEquals } from "@std/assert";
import { calculateTotalTime, parseEndDate, yearsSince } from "./dates.ts";

const now = new Date("2026-09-07");

Deno.test("calculateTotalTime spans multiple jobs inclusively", () => {
  const jobs = [
    { timePeriod: "Jan 2021 - Dec 2022" },
    { timePeriod: "Jul 2018 - Dec 2020" },
  ];
  assertEquals(calculateTotalTime(jobs, now), "4 years and 6 months");
});

Deno.test("calculateTotalTime handles ongoing jobs and singular units", () => {
  assertEquals(
    calculateTotalTime([{ timePeriod: "Sep 2025 - now" }], now),
    "1 year and 1 month",
  );
  assertEquals(calculateTotalTime([], now), "");
});

Deno.test("parseEndDate treats now and present as ongoing", () => {
  assertEquals(parseEndDate("Nov 2024 - now", now), now);
  assertEquals(parseEndDate("Nov 2024 - Present", now), now);
  assertEquals(parseEndDate("Nov 2024", now), now);
});

Deno.test("yearsSince counts whole years only", () => {
  assertEquals(yearsSince([{ timePeriod: "Jun 2016 - Jun 2018" }], now), 10);
  assertEquals(yearsSince([{ timePeriod: "Oct 2016 - now" }], now), 9);
});
