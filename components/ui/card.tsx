import type { ComponentChildren, JSX } from "preact";
import { cn } from "../../lib/utils.ts";

type DivProps = JSX.HTMLAttributes<HTMLDivElement> & {
  children?: ComponentChildren;
};

export function Card({ class: className, children, ...props }: DivProps) {
  return (
    <div
      class={cn(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ class: className, children, ...props }: DivProps) {
  return (
    <div class={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle(
  { class: className, children, ...props }:
    & JSX.HTMLAttributes<
      HTMLHeadingElement
    >
    & { children?: ComponentChildren },
) {
  return (
    <h3
      class={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription(
  { class: className, children, ...props }:
    & JSX.HTMLAttributes<
      HTMLParagraphElement
    >
    & { children?: ComponentChildren },
) {
  return (
    <p class={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent(
  { class: className, children, ...props }: DivProps,
) {
  return (
    <div class={cn("p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ class: className, children, ...props }: DivProps) {
  return (
    <div class={cn("flex items-center p-6 pt-0", className)} {...props}>
      {children}
    </div>
  );
}
