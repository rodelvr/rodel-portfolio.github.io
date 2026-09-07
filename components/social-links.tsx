import { socials } from "../data/site.ts";
import { cn } from "../lib/utils.ts";
import { Icon } from "./ui/icon.tsx";

/** Icon links to the social profiles listed in data/site.ts. */
export function SocialLinks(
  { class: className, iconClass = "text-2xl" }: {
    class?: string;
    iconClass?: string;
  },
) {
  return (
    <nav class={cn("flex items-center gap-1", className)}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          class="flex size-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Icon icon={social.icon} class={iconClass} />
        </a>
      ))}
    </nav>
  );
}
