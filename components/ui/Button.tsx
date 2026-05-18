import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  as?: "button" | "link";
  href?: string;
}

export function Button({ as = "button", href, className = "", children, ...props }: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center rounded-3xl bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 ${className}`;

  if (as === "link") {
    return (
      <Link href={href || "/"} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}
