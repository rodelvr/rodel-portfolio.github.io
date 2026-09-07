import { experience } from "../data/experience.ts";
import { mediumPosts } from "../data/medium-posts.ts";
import { newsletterPosts } from "../data/newsletter.ts";
import { site } from "../data/site.ts";
import { talks } from "../data/talks.ts";
import { yearsSince } from "../lib/dates.ts";
import TypingAnimation from "../islands/typing-animation.tsx";
import { SocialLinks } from "./social-links.tsx";
import { Badge } from "./ui/badge.tsx";
import { ButtonLink } from "./ui/button.tsx";
import { ArrowRight, Download } from "./ui/icons.tsx";
import { Container } from "./ui/section.tsx";

function heroStats() {
  const years = yearsSince(experience.flatMap((company) => company.jobs));
  return [
    { value: `${years}+`, label: "Years in data & ML" },
    { value: "3B+", label: "Live AI/ML model predictions shipped" },
    {
      value: `${mediumPosts.length + newsletterPosts.length}`,
      label: "Blog posts",
    },
    { value: `${talks.length}`, label: "Talks & events" },
  ];
}

export default function Hero() {
  const [current] = experience;
  const [currentJob] = current.jobs;

  return (
    <section class="relative overflow-hidden">
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-brand)_0%,transparent_60%)] opacity-[0.12] dark:opacity-20"
      />
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <Container class="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr] lg:py-32">
        <div class="max-w-2xl">
          <a href="#experience" class="inline-flex">
            <Badge variant="brand" class="px-3 py-1 text-sm">
              <span class="relative flex size-2">
                <span class="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                <span class="relative inline-flex size-2 rounded-full bg-brand" />
              </span>
              {currentJob.title} at {current.name}
            </Badge>
          </a>
          <h1 class="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            <TypingAnimation strings={["Hi!", "I'm Rodel."]} />
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            I'm an engineer turned CTO with over a decade across data, machine
            learning, full-stack engineering and leadership. I've built products
            and teams at a bank, a global payments company and start-ups, and
            today I lead engineering at an AI-native fintech.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href={site.cv} download size="lg">
              <Download />
              Download CV
            </ButtonLink>
            <ButtonLink href="#experience" variant="outline" size="lg">
              View experience
              <ArrowRight />
            </ButtonLink>
          </div>
          <SocialLinks class="mt-8" />
        </div>

        <dl class="grid grid-cols-2 gap-4">
          {heroStats().map((stat) => (
            <div
              key={stat.label}
              class="rounded-xl border bg-card/60 p-6 shadow-sm backdrop-blur"
            >
              <dd class="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
              <dt class="mt-1 text-sm text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
