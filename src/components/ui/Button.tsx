import { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "font-semibold rounded-lg transition-colors",
        {
          "bg-accent-500 hover:bg-accent-600 text-white":
            variant === "primary",
          "bg-primary-500 hover:bg-primary-600 text-white":
            variant === "secondary",
          "border-2 border-primary-500 text-primary-600 hover:bg-primary-50":
            variant === "outline",
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
