import { ReactNode } from "react";
import { clsx } from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={clsx("container mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
