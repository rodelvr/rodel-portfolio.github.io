import { mediumPosts } from "../data/medium-posts.ts";
import { newsletter, newsletterPosts } from "../data/newsletter.ts";
import { NewsletterBanner } from "./newsletter-banner.tsx";
import { PostCard } from "./post-card.tsx";
import { ArrowUpRight } from "./ui/icons.tsx";
import { Section, SectionHeader } from "./ui/section.tsx";

const FEATURED_POSTS = 6;

export default function Blogs() {
  const featured = newsletterPosts.slice(0, FEATURED_POSTS);

  return (
    <Section id="blogs">
      <SectionHeader
        eyebrow="Writing"
        title="Blogs"
        description="Lessons learned from building data platforms, shipping machine learning and leading data teams."
      />

      <NewsletterBanner />
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((post) => <PostCard key={post.url} post={post} />)}
      </div>
      {newsletterPosts.length > FEATURED_POSTS && (
        <p class="mt-6 text-sm">
          <a
            href={newsletter.archiveUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
          >
            All {newsletterPosts.length} posts on Substack
            <ArrowUpRight />
          </a>
        </p>
      )}

      <h3 class="mb-6 mt-16 text-xl font-semibold tracking-tight">
        Earlier writing on Medium
      </h3>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mediumPosts.map((post) => <PostCard key={post.url} post={post} />)}
      </div>
    </Section>
  );
}
