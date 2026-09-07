# rodel.dev

Source of [rodel.dev](https://rodel.dev), the portfolio website of Rodel van
Rooijen. It started as an adaptation of the open source
[deno-portfolio](https://github.com/michael-pfister/deno-portfolio/) template.

## Stack

- [Deno](https://deno.com) and [Fresh 2](https://usefresh.dev) (Preact, Vite)
- [Tailwind CSS v4](https://tailwindcss.com) with
  [shadcn/ui](https://ui.shadcn.com)-style design tokens and primitives
- Icons: inline [Lucide](https://lucide.dev) SVGs for UI chrome and
  [Iconify](https://iconify.design) for brand and technology logos

## Project layout

- `routes/` – pages (file-system routing).
- `data/` – all site content: experience, posts, talks, technologies, site
  metadata. Edit these files to update the site.
- `components/` – server-rendered sections (hero, blogs, experience, ...), their
  cards, and the `components/ui/` primitives (button, card, badge, ...).
- `islands/` – the few interactive parts that ship JavaScript to the browser
  (theme toggle, typing animation, "Read more" toggles).
- `lib/` – small pure helpers (dates, text parsing, class names) with tests.
- `components/experimental/` – three.js experiments that are not on the site yet
  (kept out of `islands/` so they are not bundled).
- `static/` – images, logos, CV and other static assets.
- `assets/styles.css` – Tailwind entry point and theme tokens.

## Running locally

1. Install
   [Deno 2](https://docs.deno.com/runtime/getting_started/installation/).
2. Run `deno install` once to fetch the dependencies.
3. Start the development server with `deno task dev` and open
   `http://localhost:5173`.

## Code style

Formatting and linting are Deno's built-in `deno fmt` and `deno lint`, enforced
in three places:

- **On save** – `.vscode/settings.json` formats with the Deno extension and
  applies lint fixes (install the recommended extensions when prompted).
- **On commit** – a pre-commit hook formats and lints the staged files. Enable
  it once per clone with `deno task hooks`.
- **In CI** – every push and pull request runs `deno fmt --check`, `deno lint`,
  `deno check`, the unit tests and the build.

`deno task fix` formats everything and applies auto-fixable lint rules;
`deno task check` runs formatting, linting, type checks and the unit tests.
`deno task build` followed by `deno task start` serves the production build on
`http://localhost:8000`.

## Deployment

The site runs on [Deno Deploy](https://deno.com/deploy). The build and runtime
configuration lives in the `deploy` block of `deno.json`: Deno Deploy runs
`deno install` and `deno task build`, then serves `_fresh/server.js`. The `CI`
workflow in this repository checks, builds and audits the site with Lighthouse
on every push and pull request.

## License

[MIT](LICENSE)
