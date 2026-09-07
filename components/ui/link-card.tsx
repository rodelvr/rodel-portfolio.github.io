import type { ComponentChildren } from "preact";
import { cn } from "../../lib/utils.ts";

/** An external link wrapping a whole card, with group hover and focus styles. */
export function LinkCard(
  { href, class: className, children }: {
    href: string;
    class?: string;
    children?: ComponentChildren;
  },
) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      class={cn(
        "group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      {children}
    </a>
  );
}
