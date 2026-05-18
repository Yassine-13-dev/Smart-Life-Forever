import { companyHistory } from "@/lib/constants";

export function CompanyHistory() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">{companyHistory.title}</h2>
      {companyHistory.paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 leading-7 text-slate-600">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
