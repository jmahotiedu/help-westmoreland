import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const buttonStyles = (
  variant: "primary" | "secondary" | "outline",
  size: "sm" | "md" | "lg"
) =>
  cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 touch-manipulation active:scale-[0.98]",
    "min-h-[44px] sm:min-h-[2.25rem]",
    {
      "bg-accent-500 hover:bg-accent-600 text-white focus-visible:ring-accent-500":
        variant === "primary",
      "bg-primary-500 hover:bg-primary-600 text-white focus-visible:ring-primary-500":
        variant === "secondary",
      "border-2 border-current text-primary-600 hover:bg-primary-50 focus-visible:ring-primary-500":
        variant === "outline",
      "px-4 py-2.5 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg min-h-[48px] sm:min-h-[3rem]": size === "lg",
    }
  );

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
      type="button"
      className={cn(buttonStyles(variant, size), className)}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
}

/** Use for CTAs that navigate; avoids invalid <a><button> markup. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonStyles(variant, size), className)}
    >
      {children}
    </Link>
  );
}
