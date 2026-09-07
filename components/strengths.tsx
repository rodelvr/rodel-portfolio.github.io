import { strengths } from "../data/strengths.ts";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Section, SectionHeader } from "./ui/section.tsx";

export default function Strengths() {
  return (
    <Section id="about" class="border-y bg-muted/40">
      <SectionHeader eyebrow="About" title="What I bring to the table" />
      <div class="grid gap-6 md:grid-cols-3">
        {strengths.map((strength) => (
          <Card key={strength.title} class="overflow-hidden">
            <img
              src={strength.image}
              alt={strength.title}
              loading="lazy"
              class="aspect-[16/10] w-full object-cover"
            />
            <CardHeader>
              <CardTitle class="text-lg">{strength.title}</CardTitle>
              <CardDescription class="leading-relaxed">
                {strength.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
