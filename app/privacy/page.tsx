import { pageHeaders, privacyPoints } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-sky-700">{pageHeaders.privacy.label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {pageHeaders.privacy.title}
        </h1>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-slate-600 leading-7">{pageHeaders.privacy.description}</p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-slate-600">
          {privacyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
