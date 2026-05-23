import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}

const glassButtonVariants = cva(
  "relative isolate all-unset cursor-pointer rounded-full transition-all flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "glass-button",
        wet: "glass-button-wet",
      },
      size: {
        default: "text-base font-semibold",
        sm: "text-sm font-semibold",
        lg: "text-lg font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const glassButtonTextVariants = cva(
  "glass-button-text relative block select-none tracking-wide",
  {
    variants: {
      size: {
        default: "px-6 py-3.5",
        sm: "px-4 py-2.5",
        lg: "px-8 py-4",
        icon: "flex h-11 w-11 items-center justify-center",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  contentClassName?: string;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, children, variant = "default", size, contentClassName, ...props }, ref) => {
    const isWet = variant === "wet";
    const wrapClass = isWet ? "glass-button-wet-wrap" : "glass-button-wrap";
    const shadowClass = isWet ? "glass-button-wet-shadow" : "glass-button-shadow";

    return (
      <div
        className={cn(
          wrapClass,
          "cursor-pointer rounded-full",
          className
        )}
      >
        <button
          className={cn(glassButtonVariants({ variant: variant as "default" | "wet", size }))}
          ref={ref}
          {...props}
        >
          <span
            className={cn(
              glassButtonTextVariants({ size }),
              contentClassName
            )}
          >
            {children}
          </span>
        </button>
        <div className={cn(shadowClass, "rounded-full")}></div>
      </div>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };
