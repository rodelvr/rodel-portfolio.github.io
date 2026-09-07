import type { Talk } from "../data/types.ts";
import { Badge } from "./ui/badge.tsx";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { FileText, Play, Users } from "./ui/icons.tsx";
import { LinkCard } from "./ui/link-card.tsx";

const ACTIONS = {
  video: { label: "Watch video", Icon: Play },
  slides: { label: "View slides", Icon: FileText },
  event: { label: "View event", Icon: Users },
} as const;

const ROLES = {
  speaker: "Speaker",
  panelist: "Panelist",
  organiser: "Organiser",
} as const;

export function TalkCard({ talk }: { talk: Talk }) {
  const action = ACTIONS[talk.kind];

  return (
    <LinkCard href={talk.url}>
      <Card class="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
        <div class="relative overflow-hidden">
          <img
            src={talk.thumbnail}
            alt={talk.title}
            loading="lazy"
            class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <span class="flex size-14 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg">
              <action.Icon
                class={talk.kind === "video"
                  ? "ml-0.5 size-6 fill-current"
                  : "size-6"}
              />
            </span>
          </div>
        </div>
        <CardHeader class="flex-1">
          <Badge variant="secondary" class="mb-1 w-fit">
            {ROLES[talk.role]}
          </Badge>
          <CardTitle class="text-lg leading-snug">{talk.title}</CardTitle>
          <CardDescription class="leading-relaxed">
            {talk.description}
          </CardDescription>
          <p class="pt-2 text-sm font-medium">{action.label} →</p>
        </CardHeader>
      </Card>
    </LinkCard>
  );
}
