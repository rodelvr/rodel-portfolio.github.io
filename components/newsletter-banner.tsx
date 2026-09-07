import { newsletter } from "../data/newsletter.ts";
import { ButtonLink } from "./ui/button.tsx";
import { Icon } from "./ui/icon.tsx";
import { ArrowUpRight } from "./ui/icons.tsx";

export function NewsletterBanner() {
  return (
    <div class="mb-6 flex flex-col gap-4 rounded-xl border bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex items-start gap-4">
        <span class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[#ff6719]/10 text-[#ff6719]">
          <Icon icon="simple-icons:substack" class="text-2xl" />
        </span>
        <div>
          <h3 class="text-lg font-semibold tracking-tight">
            {newsletter.name}
          </h3>
          <p class="mt-1 text-sm text-muted-foreground">
            {newsletter.description}
          </p>
        </div>
      </div>
      <ButtonLink
        href={newsletter.url}
        target="_blank"
        rel="noopener noreferrer"
        class="shrink-0"
      >
        Subscribe on Substack
        <ArrowUpRight />
      </ButtonLink>
    </div>
  );
}
