import { useState } from "preact/hooks";
import { Button } from "../components/ui/button.tsx";
import { ChevronDown } from "../components/ui/icons.tsx";
import { parseBlocks } from "../lib/text.ts";
import { cn } from "../lib/utils.ts";

export interface JobDetailsProps {
  /** Raw multi-line details text; lines starting with "- " become bullets. */
  details: string;
  /** Used to build a stable id for aria-controls. */
  id: string;
}

/** Expandable "Read more" panel for a job on the experience timeline. */
export default function JobDetails({ details, id }: JobDetailsProps) {
  const [open, setOpen] = useState(false);
  const panelId = `job-details-${id}`;

  return (
    <div class="mt-3">
      <Button
        variant="outline"
        size="sm"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(!open)}
      >
        {open ? "Show less" : "Read more"}
        <ChevronDown class={cn("transition-transform", open && "rotate-180")} />
      </Button>
      <div
        id={panelId}
        hidden={!open}
        class="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground"
      >
        {parseBlocks(details).map((block, i) =>
          block.type === "list"
            ? (
              <ul key={i} class="ml-4 list-disc space-y-1.5">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )
            : (
              <p
                key={i}
                class={cn(block.heading && "font-medium text-foreground")}
              >
                {block.text}
              </p>
            )
        )}
      </div>
    </div>
  );
}
