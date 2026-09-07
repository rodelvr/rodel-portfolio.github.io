import type { ComponentChildren } from "preact";
import { cn } from "../../lib/utils.ts";

export function Container(
  { class: className, children }: {
    class?: string;
    children?: ComponentChildren;
  },
) {
  return (
    <div class={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}>
      {children}
    </div>
  );
}

export function Section(
  { id, class: className, children }: {
    id?: string;
    class?: string;
    children?: ComponentChildren;
  },
) {
  return (
    <section id={id} class={cn("py-16 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader(
  { eyebrow, title, description, class: className }: {
    eyebrow?: string;
    title: string;
    description?: string;
    class?: string;
  },
) {
  return (
    <div class={cn("mb-10 max-w-2xl sm:mb-12", className)}>
      {eyebrow && (
        <p class="mb-2 text-sm font-medium uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
      )}
      <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p class="mt-3 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
