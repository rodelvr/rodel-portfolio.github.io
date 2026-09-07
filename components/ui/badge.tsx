import type { ComponentChildren, JSX } from "preact";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils.ts";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        brand: "border-transparent bg-brand/10 text-brand",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps =
  & JSX.HTMLAttributes<HTMLSpanElement>
  & VariantProps<typeof badgeVariants>
  & { children?: ComponentChildren };

export function Badge(
  { class: className, variant, children, ...props }: BadgeProps,
) {
  return (
    <span class={cn(badgeVariants({ variant }), className)} {...props}>
      {children}
    </span>
  );
}
