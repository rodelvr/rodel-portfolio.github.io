import { define } from "../utils.ts";
import AppBar from "../components/app-bar.tsx";
import Footer from "../components/footer.tsx";
import { HeadScripts } from "../components/head-scripts.tsx";
import { MetaTags } from "../components/meta-tags.tsx";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";

export default define.page(function App({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <MetaTags />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href={FONT_URL} />
        <HeadScripts />
      </head>
      <body class="flex min-h-screen flex-col overflow-x-hidden">
        <AppBar />
        <main class="flex-1">
          <Component />
        </main>
        <Footer />
      </body>
    </html>
  );
});
