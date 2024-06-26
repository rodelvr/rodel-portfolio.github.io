import { type PageProps } from "$fresh/server.ts";
import AppBar from "../islands/AppBar.tsx";
import { Icon } from "@iconify-icon/react";

function MetaTags(
  { credentials, url }: { credentials: { name: string }; url: string },
) {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>
        ${credentials.name} - Engineer | Data & ML
      </title>
      <meta
        name="title"
        content={`${credentials.name} - Engineer | Data & ML`}
      />
      <meta
        name="description"
        content={`Explore ${credentials.name}'s portfolio website showcasing experience and projects.`}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${url}`} />
      <meta
        property="og:title"
        content={`${credentials.name} - Engineer | Data & ML`}
      />
      <meta
        property="og:description"
        content={`Explore ${credentials.name}'s portfolio website showcasing experience and projects.`}
      />
      <meta
        property="og:image"
        content={`${url}meta-image.webp`}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${url}`} />
      <meta
        property="twitter:title"
        content={`${credentials.name} - Engineer | Data & ML`}
      />
      <meta
        property="twitter:description"
        content={`Explore ${credentials.name}'s portfolio showcasing a diverse range of web development projects. Specializing in full-stack development with expertise in JavaScript, React, Node.js, and more. Discover how I can bring your web vision to life.`}
      />
      <meta
        property="twitter:image"
        content={`${url}meta-image.webp`}
      />

      {/* Meta Tags Generated with https://metatags.io */}
    </>
  );
}

export default function App({ Component }: PageProps) {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/rodelvr",
      icon: "fa-brands:github",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/rodelvro",
      icon: "fa-brands:twitter",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rodelvr",
      icon: "fa-brands:linkedin",
    },
  ];

  const credentials = {
    name: "Rodel van Rooijen",
  };

  const url = "https://rodel.dev/";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags credentials={credentials} url={url} />
        <title>Portfolio | {credentials.name}</title>
        <link rel="stylesheet" href="/styles.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if ('requestIdleCallback' in window) {
              requestIdleCallback(function() {
                var script = document.createElement('script');
                script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EXLP2XMEYX';
                script.async = true;
                document.head.appendChild(script);

                script.onload = function() {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-EXLP2XMEYX');
                };
              });
            } else {
              // Fallback for browsers that do not support requestIdleCallback
              var script = document.createElement('script');
              script.src = 'https://www.googletagmanager.com/gtag/js?id=G-EXLP2XMEYX';
              script.async = true;
              document.head.appendChild(script);

              script.onload = function() {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EXLP2XMEYX');
              };
            }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col max-w-screen-xl mx-auto overflow-x-hidden">
        <header>
          <AppBar />
        </header>
        <main className="flex-grow">
          <Component />
        </main>
        <footer className="mt-auto w-full m-2 p-4 bg-neutral text-neutral-content rounded-lg">
          <aside className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
            <span className="mb-2 md:mb-0">
              <a
                href="https://github.com/rodelvr/rodel-portfolio.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:underline"
              >
                <Icon icon="ic:outline-source" width="24" height="24" />
              </a>
            </span>
            <nav className="flex justify-center gap-4">
              {socials.map((social) => (
                <a
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                  key={social.name}
                >
                  <Icon icon={social.icon} width="24" height="24" />
                </a>
              ))}
            </nav>
          </aside>
        </footer>
      </body>
    </html>
  );
}
