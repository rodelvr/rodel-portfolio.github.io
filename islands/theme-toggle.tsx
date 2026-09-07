import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/ui/button.tsx";
import { Moon, Sun } from "../components/ui/icons.tsx";

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {
    // localStorage may be unavailable (private mode); the toggle still works.
  }
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  // The initial theme is applied by an inline script in routes/_app.tsx
  // before first paint; here we only sync the icon with it.
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    applyTheme(next);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      title="Toggle theme"
      onClick={toggle}
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
}
