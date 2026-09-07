import { cn } from "../../lib/utils.ts";

export function Separator(
  { class: className, orientation = "horizontal" }: {
    class?: string;
    orientation?: "horizontal" | "vertical";
  },
) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      class={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
    />
  );
}
