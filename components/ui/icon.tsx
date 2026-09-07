import type { JSX } from "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "iconify-icon": JSX.HTMLAttributes<HTMLElement> & {
        icon: string;
        width?: string | number;
        height?: string | number;
        inline?: boolean;
        mode?: "svg" | "style" | "bg" | "mask";
      };
    }
  }
}

export interface IconProps {
  /** Iconify icon name, e.g. "devicon:python". */
  icon: string;
  class?: string;
  width?: string | number;
  height?: string | number;
  title?: string;
}

/**
 * Renders an icon from the Iconify catalogue via the <iconify-icon> web
 * component (registered in client.ts). Used for brand and technology logos.
 */
export function Icon(
  { icon, class: className, width, height, title }: IconProps,
) {
  return (
    <iconify-icon
      icon={icon}
      class={className}
      width={width ?? "1em"}
      height={height ?? "1em"}
      title={title}
      aria-hidden={title ? undefined : "true"}
    />
  );
}
