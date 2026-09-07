import { talks } from "../data/talks.ts";
import { TalkCard } from "./talk-card.tsx";
import { Section, SectionHeader } from "./ui/section.tsx";

export default function Videos() {
  return (
    <Section id="videos" class="border-y bg-muted/40">
      <SectionHeader
        eyebrow="Speaking"
        title="Talks & events"
        description="Conference talks, panels and meetups I organised on data infrastructure, machine learning and AI in production."
      />
      <div class="grid gap-6 md:grid-cols-2">
        {talks.map((talk) => <TalkCard key={talk.url} talk={talk} />)}
      </div>
    </Section>
  );
}
