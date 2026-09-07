import { technologies, technologyCategories } from "../data/technologies.ts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card.tsx";
import { Icon } from "./ui/icon.tsx";
import { Section, SectionHeader } from "./ui/section.tsx";

export default function Technologies() {
  return (
    <Section id="technologies" class="border-t bg-muted/40">
      <SectionHeader
        eyebrow="Toolbox"
        title="Technologies"
        description="The tools I reach for most often."
      />
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {technologyCategories.map((category) => (
          <Card key={category}>
            <CardHeader>
              <CardTitle class="text-base capitalize">{category}</CardTitle>
            </CardHeader>
            <CardContent class="flex flex-wrap gap-2">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 rounded-md border bg-background px-2.5 py-1.5 text-sm transition-colors hover:bg-accent"
                  >
                    <Icon icon={tech.icon} class="text-lg" />
                    {tech.name}
                  </a>
                ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
