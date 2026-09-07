import type { Post } from "../data/types.ts";
import { newsletter } from "../data/newsletter.ts";
import { formatMonthYear } from "../lib/text.ts";
import { Badge } from "./ui/badge.tsx";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card.tsx";
import { Icon } from "./ui/icon.tsx";
import { ArrowUpRight } from "./ui/icons.tsx";
import { LinkCard } from "./ui/link-card.tsx";

export function PostCard({ post }: { post: Post }) {
  const isNewsletter = post.source === "newsletter";

  return (
    <LinkCard href={post.url}>
      <Card class="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-0.5 group-hover:shadow-md">
        <div class="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            class="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <CardHeader class="flex-1">
          <div class="mb-1 flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <Badge variant="secondary">
                {post.icon && <Icon icon={post.icon} />}
                {isNewsletter ? newsletter.name : post.topic}
              </Badge>
              {post.date && (
                <span class="text-xs text-muted-foreground">
                  {formatMonthYear(post.date)}
                </span>
              )}
            </div>
            <ArrowUpRight class="text-muted-foreground transition-colors group-hover:text-foreground" />
          </div>
          <CardTitle class="text-lg leading-snug">{post.title}</CardTitle>
          <CardDescription class="line-clamp-3 leading-relaxed">
            {post.description}
          </CardDescription>
        </CardHeader>
      </Card>
    </LinkCard>
  );
}
