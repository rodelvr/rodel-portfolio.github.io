import { Icon, loadIcon } from "@iconify-icon/react";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";

// preload icons
loadIcon("fa6-brands:dev");
loadIcon("ri:dice-line");

function toggleTheme(themes: string[]) {
  const html = document.querySelector("html");
  const theme = html?.getAttribute("data-theme");
  // assign a random theme except the current one
  const filteredThemes = themes.filter((t) => t !== theme);
  const randomTheme = filteredThemes[Math.floor(Math.random() * themes.length)];

  html?.setAttribute("data-theme", randomTheme);
  localStorage.setItem("theme", randomTheme);
}
export default function AppBar() {
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    axios.get("/api/themes").then((res) => {
      setThemes(res.data);
    });
  }, []);

  return (
    <nav class="flex justify-between items-center p-2">
      <a href="/" class="text-xl font-bold flex items-center">
        <Icon
          icon="carbon:data-volume"
          width="none"
          height="none"
        />
        Portfolio
      </a>
      <ul class="flex gap-2">
        <li>
          <a
            class="btn btn-primary text-base-100"
            href="/rodel_van_rooijen_cv.pdf"
            download
          >
            Download CV
          </a>
        </li>
        <li>
          <button
            class="btn"
            aria-label="change Theme"
            onClick={() => toggleTheme(themes)}
          >
            <Icon
              class="active:animate-spin"
              icon="ri:dice-line"
              width="none"
              height="none"
            />
            Theme
          </button>
        </li>
      </ul>
    </nav>
  );
}
