import { navLinks, site } from "../data/site.ts";
import ThemeToggle from "../islands/theme-toggle.tsx";
import { ButtonLink } from "./ui/button.tsx";
import { Database, Download } from "./ui/icons.tsx";
import { Container } from "./ui/section.tsx";

export default function AppBar() {
  return (
    <header class="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container class="flex h-16 items-center justify-between gap-4">
        <a
          href="/"
          class="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span class="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Database />
          </span>
          <span class="hidden sm:inline">{site.name}</span>
          <span class="sm:hidden">{site.firstName}</span>
        </a>

        <nav class="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              class="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div class="flex items-center gap-2">
          <ButtonLink href={site.cv} download size="sm">
            <Download />
            <span>Download CV</span>
          </ButtonLink>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
