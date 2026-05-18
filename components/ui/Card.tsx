import type { ComponentPropsWithoutRef } from "react";

interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`} {...props}>
      {children}
    </div>
  );
}
