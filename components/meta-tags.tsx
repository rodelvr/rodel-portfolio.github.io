import { site } from "../data/site.ts";

const title = `${site.name} - ${site.title}`;
const image = `${site.url}meta-image.webp`;

/** Title, description and social sharing metadata for every page. */
export function MetaTags() {
  return (
    <>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={site.description} />
      <meta name="color-scheme" content="light dark" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={site.url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={site.description} />
      <meta property="twitter:image" content={image} />
    </>
  );
}
