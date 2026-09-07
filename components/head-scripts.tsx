// deno-lint-ignore-file react-no-danger
import { site } from "../data/site.ts";

/** Applies the saved (or system) theme before first paint to avoid a flash. */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

/** Loads Google Analytics once the browser is idle so it never blocks paint. */
const analyticsScript = `
(function () {
  function load() {
    var script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=${site.analyticsId}";
    script.async = true;
    document.head.appendChild(script);
    script.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "${site.analyticsId}");
    };
  }
  if ("requestIdleCallback" in window) requestIdleCallback(load);
  else load();
})();
`;

export function HeadScripts() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <script dangerouslySetInnerHTML={{ __html: analyticsScript }} />
    </>
  );
}
