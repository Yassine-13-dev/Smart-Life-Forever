import { expertiseList } from "@/lib/constants";

export function ExpertiseList() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-700">Expertise</p>
      <h2 className="mt-3 text-2xl font-semibold text-slate-900">Domaines clés</h2>
      <ul className="mt-6 space-y-3 text-slate-600">
        {expertiseList.map((item) => (
          <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
