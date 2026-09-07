import { experience } from "../data/experience.ts";
import { CompanyCard } from "./company-card.tsx";
import { Section, SectionHeader } from "./ui/section.tsx";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        description="From data scientist to engineering lead, across banks, payments, insurance and start-ups."
      />
      <ol class="relative ml-3 border-l sm:ml-5">
        {experience.map((company) => (
          <CompanyCard key={company.name} company={company} />
        ))}
      </ol>
    </Section>
  );
}
