import { assertEquals } from "@std/assert";
import { formatMonthYear, parseBlocks, slugify } from "./text.ts";

Deno.test("parseBlocks groups bullets into a list and flags headings", () => {
  const blocks = parseBlocks(`
    I built things.

    Achievements:
    - First
    - Second
    Closing line.
  `);
  assertEquals(blocks, [
    { type: "paragraph", text: "I built things.", heading: false },
    { type: "paragraph", text: "Achievements:", heading: true },
    { type: "list", items: ["First", "Second"] },
    { type: "paragraph", text: "Closing line.", heading: false },
  ]);
});

Deno.test("parseBlocks returns nothing for blank input", () => {
  assertEquals(parseBlocks("\n  \n"), []);
});

Deno.test("slugify produces a clean identifier", () => {
  assertEquals(
    slugify("Adyen - Tech Lead Manager, ML"),
    "adyen-tech-lead-manager-ml",
  );
});

Deno.test("formatMonthYear renders month and year", () => {
  assertEquals(formatMonthYear("2025-07-31"), "Jul 2025");
});
