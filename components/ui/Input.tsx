import type { ComponentPropsWithoutRef } from "react";

export function Input({ className = "", ...props }: ComponentPropsWithoutRef<"input">) {
  return (
    <input
      className={`w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100 ${className}`}
      {...props}
    />
  );
}
