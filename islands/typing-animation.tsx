import { useEffect, useState } from "preact/hooks";

interface TypingAnimationProps {
  strings: string[];
  /** Milliseconds per typed character. */
  typeSpeed?: number;
  /** Milliseconds per deleted character. */
  deleteSpeed?: number;
  /** Pause after a string is fully typed. */
  pause?: number;
  loop?: boolean;
}

/**
 * Types the given strings one after another with a blinking caret.
 * The first string is server-rendered so the hero never appears empty.
 */
export default function TypingAnimation(
  {
    strings,
    typeSpeed = 70,
    deleteSpeed = 40,
    pause = 1800,
    loop = true,
  }: TypingAnimationProps,
) {
  const [text, setText] = useState(strings[0] ?? "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Give the server-rendered first string a moment before animating.
    const t = setTimeout(() => setStarted(true), pause);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started || strings.length === 0) return;
    const current = strings[index % strings.length];
    const isLast = index === strings.length - 1;
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === current) {
      if (isLast && !loop) return;
      delay = pause;
    } else if (deleting && text === "") {
      delay = 300;
    }

    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % strings.length);
      } else if (deleting) {
        setText(current.slice(0, text.length - 1));
      } else {
        setText(current.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [started, text, deleting, index, strings, loop]);

  return (
    <span aria-label={strings.join(" ")}>
      <span aria-hidden="true">{text}</span>
      <span
        aria-hidden="true"
        class="typing-caret ml-0.5 inline-block w-[3px] self-stretch bg-brand align-text-bottom"
        style={{ height: "0.9em" }}
      />
    </span>
  );
}
