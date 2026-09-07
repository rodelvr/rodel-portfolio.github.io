export interface Paragraph {
  type: "paragraph";
  text: string;
  /** True for short lead-in lines such as "Achievements:". */
  heading: boolean;
}

export interface List {
  type: "list";
  items: string[];
}

export type Block = Paragraph | List;

/**
 * Parse free-form multi-line details into paragraphs and bullet lists.
 * Lines starting with "- " become list items; blank lines are ignored.
 */
export function parseBlocks(details: string): Block[] {
  const blocks: Block[] = [];
  for (const raw of details.split("\n")) {
    const line = raw.trim();
    if (line === "") continue;

    if (line.startsWith("- ")) {
      const item = line.slice(2).trim();
      const last = blocks.at(-1);
      if (last?.type === "list") last.items.push(item);
      else blocks.push({ type: "list", items: [item] });
      continue;
    }

    blocks.push({ type: "paragraph", text: line, heading: line.endsWith(":") });
  }
  return blocks;
}

/** Turn any string into a lowercase, hyphen-separated identifier. */
export function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

/** Format an ISO date as "Jul 2025". */
export function formatMonthYear(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}
