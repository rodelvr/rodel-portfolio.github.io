import { site } from "../data/site.ts";
import { SocialLinks } from "./social-links.tsx";
import { Code } from "./ui/icons.tsx";
import { Container } from "./ui/section.tsx";

export default function Footer() {
  return (
    <footer class="border-t py-8">
      <Container class="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div class="flex items-center gap-1">
          <SocialLinks iconClass="text-xl" />
          <a
            href={site.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Source code on GitHub"
            title="Source code"
            class="flex size-10 items-center justify-center rounded-md transition-colors hover:bg-accent hover:text-foreground"
          >
            <Code class="size-5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
